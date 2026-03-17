import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { stubFor } from './wiremock'

export default {
  stubGetRiskData: async () => {
    const mappingJsonPromises = (await getMappingJson()).map(async mapping => {
      await stubFor(mapping)
    })
    await Promise.all(mappingJsonPromises)
  },
}

const getMappingJson = async (): Promise<Record<string, unknown>[]> => {
  const mappingFolder = 'helm_deploy/hmpps-arns-frontend-components/mappings'
  const mappingFiles = await readdir(mappingFolder, { withFileTypes: true })

  const loadPromises = mappingFiles.map(async fileName => {
    const fullPath = path.join(fileName.parentPath, fileName.name)
    const rawData = await readFile(fullPath, 'utf-8')
    return JSON.parse(rawData) as Record<string, unknown>
  })

  return Promise.all(loadPromises)
}
