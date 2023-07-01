import { createSimpleLogger, sleep } from '@0x-jerry/utils'
import { ref } from 'vue'
import { DEV } from '../config'
export { toArray, sleep } from '@0x-jerry/utils'

export const logger = createSimpleLogger('x')

export const logStacks = ref<{ id: number; logs: any[] }[]>([])

if (DEV) {
  spyOn(logger, 'log', pushToLogStack)
  spyOn(logger, 'warn', pushToLogStack)
  spyOn(logger, 'error', pushToLogStack)
}

let idx = 0

function pushToLogStack(...params: any[]) {
  logStacks.value.unshift({
    id: idx++,
    logs: params,
  })

  if (logStacks.value.length > 200) {
    logStacks.value.pop()
  }
}

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

export function spyOn<T extends {}, K extends keyof T>(
  target: T,
  key: K,
  fn: T[K]
) {
  const raw = target[key]

  // @ts-ignore
  target[key] = (...args: any[]) => {
    try {
      fn(...args)
    } catch (error) {
      console.warn('error: ', error)
    }

    return raw(...args)
  }
}
