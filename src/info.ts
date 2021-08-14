import { isDev } from './config'
import { logger } from './utils'

export function buildInfo() {
  if (isDev()) {
    logger.log('// [DEV] Useful script loaded.')
  } else {
    logger.log('// [PROD] Useful script loaded.')
  }
}
