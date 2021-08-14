import { Component, createApp } from 'vue'
import { isInIFrame } from '../utils'
import App from './App.vue'

export const useSettingUI = (comp: Component) => {
  if (isInIFrame()) {
    return
  }

  const app = document.createElement('div')
  document.body.append(app)

  createApp(App).component('setting-content', comp).mount(app)
}
