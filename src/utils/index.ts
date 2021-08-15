import { createSimpleLogger } from '@0x-jerry/lib'

export const logger = createSimpleLogger('x')

export const toArray = <T>(t: T | T[]): T[] => (Array.isArray(t) ? t : [t])

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

export function tryParseJson(o: string) {
  try {
    return JSON.parse(o)
  } catch {
    return o
  }
}

export async function waitUntil(check: () => boolean, frequency = 500) {
  return new Promise<void>((resolve) => {
    setInterval(() => {
      if (check()) {
        resolve()
      }
    }, frequency)
  })
}
