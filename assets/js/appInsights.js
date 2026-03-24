/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import * as arnsCustomAppInsights from '@ministryofjustice/hmpps-arns-frontend-components-lib/dist/js/arns-custom-app-insights'

document.initialiseTelemetry = (applicationInsightsConnectionString, applicationInsightsRoleName) => {
  if (!applicationInsightsConnectionString || !applicationInsightsRoleName) {
    console.log('AppInsights not configured')
    return
  }

  console.log('Configuring AppInsights')

  const appInsights = new ApplicationInsights({
    config: {
      disableXhr: true,
      connectionString: applicationInsightsConnectionString,
    },
  })

  const telemetryInitializer = envelope => {
    envelope.tags['ai.cloud.role'] = applicationInsightsRoleName
  }

  appInsights.loadAppInsights()
  appInsights.addTelemetryInitializer(telemetryInitializer)
  appInsights.trackPageView()
  arnsCustomAppInsights.init(appInsights)
}
