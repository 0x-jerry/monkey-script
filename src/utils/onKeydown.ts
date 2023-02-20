import { Arrayable } from '@0x-jerry/utils'
import { createKeyboardEventHandler } from '@0x-jerry/vue-kit'
import { KeyOption } from '@0x-jerry/vue-kit/dist/types/functions/keyboard-events/parse'
import { useEventListener } from '@vueuse/core'

export const handleKeydown = (
  key: Arrayable<string | KeyOption>,
  fn: (key: KeyOption) => void
) => window.addEventListener('keydown', createKeyboardEventHandler(key, fn))

export const onKeydown: (key: string, listener: (e: any) => void) => void = (
  key,
  listener
) => {
  useEventListener('keydown', createKeyboardEventHandler(key, listener))
}
