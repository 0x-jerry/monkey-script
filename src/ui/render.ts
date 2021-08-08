import { Component, createApp } from 'vue'
import App from './App.vue'

export const useSettingUI = (comp: Component) => {
  const app = document.createElement('div')
  document.body.append(app)

  createApp(App).component('setting-content', comp).mount(app)
}
