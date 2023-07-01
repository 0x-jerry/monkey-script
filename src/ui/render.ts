import { Component, createApp } from 'vue'
import { isInIFrame } from '../utils'
import App from './App.vue'

export const useSettingUI = (comp?: Component) => {
  if (isInIFrame()) {
    return
  }

  const appEl = document.createElement('div')
  document.body.append(appEl)

  const app = createApp(App)

  if (comp) {
    app.component('setting-content', comp)
  }

  app.mount(appEl)
}
