import { ISiteEffectConfig } from '../globals'

export const conf: ISiteEffectConfig = {
  test: /site\.domain/,
  fn() {
    console.log('domain init')
  },
}
