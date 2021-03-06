import { createKeyboardHandler } from '@0x-jerry/utils'
import { onMounted, onUnmounted } from 'vue'

export const handleKeydown = createKeyboardHandler((fn) =>
  window.addEventListener('keydown', (e) => {
    fn(e)
  })
)

export const onKeydown: (
  key: string,
  listener: (e: KeyboardEvent) => void
) => void = (key, listener) => {
  let cancel: () => void | null

  onMounted(() => {
    cancel = handleKeydown(key, listener)
  })

  onUnmounted(() => {
    cancel?.()
  })
}
