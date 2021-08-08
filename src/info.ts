import { isDev } from './config'

export function buildInfo() {
  if (isDev()) {
    console.log('// [DEV] Useful script loaded.')
  } else {
    console.log('// [PROD] Useful script loaded.')
  }
}
