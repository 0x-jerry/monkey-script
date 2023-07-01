import { createSimpleLogger, sleep } from '@0x-jerry/utils'
export { toArray, sleep } from '@0x-jerry/utils'

export const logger = createSimpleLogger('x')

export const start = async (fn: () => any) => {
  await sleep(1)
  fn()
}

export function isInIFrame() {
  return unsafeWindow.top !== unsafeWindow
}

export function tryParseJson(o: string) {
  try {
    return JSON.parse(o)
  } catch {
    return o
  }
}

export async function waitUntil(check: () => boolean, frequency = 500) {
  return new Promise<void>((resolve) => {
    const handler = setInterval(() => {
      if (check()) {
        clearInterval(handler)
        resolve()
      }
    }, frequency)
  })
}
