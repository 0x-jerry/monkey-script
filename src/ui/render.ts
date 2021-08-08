import { createApp } from 'vue'
import App from './App.vue'

export const ui = () => {
  const app = document.createElement('div')
  document.body.append(app)

  createApp(App).mount(app)
}
