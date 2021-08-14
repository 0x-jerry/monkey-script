import { createSimpleLogger } from '@0x-jerry/lib'

export const logger = createSimpleLogger('x')

export const sleep = (ts = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ts)
  })
}

export const start = async (fn: () => any) => {
  await sleep(1)
  fn()
}

export function isInIFrame() {
  return unsafeWindow.parent !== unsafeWindow
}
