import { EventEmitter } from '@0x-jerry/utils'
import { isInIFrame, logger } from '.'

const ProtocolKey = '__0x_user_script__'
const event = new EventEmitter()

unsafeWindow.addEventListener(
  'message',
  ({ data }) => {
    if (!isProtocol(data)) {
      return
    }

    logger.log(`[${location.hostname}:${isInIFrame()}] receive:`, data)
    event.emit(data.type, ...data.data)
  },
  false
)

export const onMsg = (type: string, listener: (...params: any[]) => void) => {
  event.on(type, listener)
}

export const createMsgSender =
  (win: Window, origin: string) =>
  (type: string, ...params: any[]) => {
    const data = {
      protocol: ProtocolKey,
      type: type,
      data: params,
    }

    logger.log(`[${location.hostname}:${isInIFrame()}] send:`, data)
    win.postMessage(data, origin)
  }

function isProtocol<T extends any[] = []>(data: any): data is ProtocolData<T> {
  try {
    return data.protocol === ProtocolKey
  } catch {
    return false
  }
}

interface ProtocolData<T extends any[] = []> {
  type: string
  data: T
}
