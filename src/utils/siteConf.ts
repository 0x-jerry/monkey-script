import { reactive, toRaw, watch } from 'vue'

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

function createConfig<T extends {}>(factory: () => T, save: (data: T) => any) {
  const data = reactive<T>(factory())

  watch(
    () => [data],
    () => {
      save(toRaw(data) as T)
    },
    {
      deep: true,
      flush: 'post'
    }
  )

  return [data]
}
