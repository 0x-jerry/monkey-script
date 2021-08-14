declare global {
  interface Window {
    __0x_jerry_dev__: boolean
  }

  export const unsafeWindow: Window
}

export interface ISiteEffectConfig {
  test: RegExp
  fn(): void
}
