import { dataAccess } from '../data'

export const services = () => {
  const { applicationInfo, arnsComponents } = dataAccess()

  return {
    applicationInfo,
    arnsComponents,
  }
}

export type Services = ReturnType<typeof services>
