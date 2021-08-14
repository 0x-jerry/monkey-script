import { createConfig } from '@0x-jerry/lib'

const confKey = '__x_user_script__'

export const getConfig = <T>(defaultConf: T) =>
  createConfig<T>(
    () => {
      const str = localStorage.getItem(confKey)
      const conf: T = str ? JSON.parse(str) : defaultConf

      return conf
    },
    (data) => {
      localStorage.setItem(confKey, JSON.stringify(data))
    }
  )

export const clearSiteConfig = () => localStorage.removeItem(confKey)
