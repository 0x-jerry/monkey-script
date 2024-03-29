export const isDev = () => !!window.__0x_jerry_dev__

export const whenDev = (fn: () => any) => {
  if (isDev()) fn()
}

export const DEV = import.meta.env.DEV