import { defaultClient, setup, type TelemetryClient } from 'applicationinsights'
import type { Request } from 'express'
import { IncomingMessage } from 'node:http'
import type { ClientRequest, RequestOptions } from 'node:http'
import type { ApplicationInfo } from '../applicationInfo'

const requestPrefixesToIgnore = ['GET /assets/', 'GET /health', 'GET /ping', 'GET /info']
const dependencyPrefixesToIgnore = ['sqs']

type AzureMonitorOptions = Parameters<ReturnType<typeof setup>['setAzureMonitorOptions']>[0]
type HttpInstrumentationOptions = NonNullable<AzureMonitorOptions['instrumentationOptions']>['http'] & {
  ignoreIncomingRequestHook?: (request: IncomingMessage) => boolean
  ignoreOutgoingRequestHook?: (request: RequestOptions) => boolean
  applyCustomAttributesOnSpan?: (
    span: { updateName: (name: string) => unknown },
    request: ClientRequest | IncomingMessage,
  ) => void
}

export function initialiseAppInsights(): void {
  if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    // eslint-disable-next-line no-console
    console.log('Enabling azure application insights')

    const httpInstrumentationOptions = {
      enabled: true,
      ignoreIncomingRequestHook: shouldIgnoreIncomingRequest,
      ignoreOutgoingRequestHook: shouldIgnoreOutgoingRequest,
      applyCustomAttributesOnSpan: (span, request) => {
        if (request instanceof IncomingMessage) {
          const expressRequest = request as Request
          if (expressRequest.route) {
            span.updateName(getOperationName(expressRequest.method, expressRequest.route.path))
          }
        }
      },
    } satisfies HttpInstrumentationOptions

    setup()
      .setAzureMonitorOptions({
        instrumentationOptions: {
          http: httpInstrumentationOptions,
        },
      })
      .start()
  }
}

export function buildAppInsightsClient(
  { applicationName, buildNumber }: ApplicationInfo,
  overrideName?: string,
): TelemetryClient {
  if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    defaultClient.context.tags['ai.cloud.role'] = overrideName || applicationName
    defaultClient.context.tags['ai.application.ver'] = buildNumber
    return defaultClient
  }
  return null
}

export function shouldIgnoreIncomingRequest(request: Pick<IncomingMessage, 'method' | 'url'>): boolean {
  const requestName = `${request.method ?? ''} ${request.url ?? ''}`
  return requestPrefixesToIgnore.some(prefix => requestName.startsWith(prefix))
}

export function shouldIgnoreOutgoingRequest(request: Pick<RequestOptions, 'host' | 'hostname'>): boolean {
  const target = request.hostname ?? request.host ?? ''
  return dependencyPrefixesToIgnore.some(prefix => target.startsWith(prefix))
}

export function getOperationName(method: string, path: string | string[]): string {
  const pathToReport = Array.isArray(path) ? `"${path.join('" | "')}"` : path
  return `${method} ${pathToReport}`
}
