declare global {
  interface Window {
    __0x_jerry_dev__: boolean
    __0x_jerry_prod__: boolean
  }

  export const unsafeWindow: Window
}

export interface ISiteEffectConfig {
  test: RegExp | RegExp[]
  fn(): void
}
