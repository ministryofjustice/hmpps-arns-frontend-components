/*
 * Do appinsights first as it does some magic instrumentation work, i.e. it affects other 'require's
 * In particular, applicationinsights automatically collects bunyan logs
 */
import { ArnsComponents } from '@ministryofjustice/hmpps-arns-frontend-components-lib'
import { initialiseAppInsights, buildAppInsightsClient } from '../utils/azureAppInsights'
import applicationInfoSupplier from '../applicationInfo'

import config from '../config'
import logger from '../../logger'

const applicationInfo = applicationInfoSupplier()
initialiseAppInsights()
buildAppInsightsClient(applicationInfo)

export const dataAccess = () => {
  return {
    applicationInfo,
    arnsComponents: new ArnsComponents(null, config.apis.arnsApi, logger),
  }
}

export type DataAccess = ReturnType<typeof dataAccess>

export { ArnsComponents }
