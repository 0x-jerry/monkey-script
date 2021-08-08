import { whenDev } from '../config'

interface KeyOption {
  key: KeyboardEvent['code']
  meta?: boolean
  ctrl?: boolean
  alt?: boolean
  shift?: boolean
}

type KeyboardEventListener = (e: KeyboardEvent) => any

const events: Set<KeyboardEventListener> = new Set()

const inputTags: string[] = ['INPUT', 'TEXTAREA']

window.addEventListener('keydown', (e) => {
  whenDev(() => {
    console.log('keydown event', e)
  })

  const isInput = inputTags.includes(document.activeElement?.nodeName || '')
  if (isInput && e.key !== 'Escape') {
    return
  }

  const currentEvents = [...events]

  for (const evt of currentEvents) {
    evt(e)
  }
})

function _useKeydown(listener: (e: KeyboardEvent) => any, opt: KeyOption) {
  const handler = (e: KeyboardEvent) => {
    const hit =
      !!opt.meta === e.metaKey &&
      !!opt.alt === e.altKey &&
      !!opt.shift === e.shiftKey &&
      !!opt.ctrl === e.ctrlKey &&
      opt.key === e.key

    if (hit) {
      listener(e)
    }
  }

  events.add(handler)

  return () => {
    events.delete(handler)
  }
}

const specialKeys = ['meta', 'ctrl', 'alt', 'shift'] as const

type SpecialKey = typeof specialKeys[number]

const isSpecialKey = (key: string): key is SpecialKey =>
  specialKeys.includes(key as SpecialKey)

const keyShortMap: Record<string, string> = {
  esc: 'Escape',
  enter: 'Enter',
  space: ' ',
  right: 'ArrowRight',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  down: 'ArrowDown',
}

function parseKeyOption(key: string) {
  const opt: KeyOption = {
    key: '',
    meta: false,
    ctrl: false,
    alt: false,
    shift: false,
  }

  const keys = key
    .split(/[+,]/g)
    .filter((n) => !!n.trim())
    .map((n) => {
      const s = n.trim()
      return keyShortMap[s] || s
    })

  for (const key of keys) {
    if (isSpecialKey(key)) {
      opt[key] = true
    } else {
      opt.key = key
    }
  }

  return opt
}

/**
 * @example
 * ```ts
 * const cancel = onKeydown('meta + a')
 *
 * cancel()
 * ```
 *
 * @param keys
 * @param listener
 * @returns
 */
export function onKeydown(keys: string, listener: KeyboardEventListener) {
  const cancels = keys
    .split('|')
    .map((key) => _useKeydown(listener, parseKeyOption(key)))

  return () => {
    cancels.map((cancel) => cancel())
  }
}
