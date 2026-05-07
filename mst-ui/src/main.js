import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uViewPro from 'uview-pro'
import App from './App.vue'

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)
  app.use(pinia)
  app.use(uViewPro)
  return {
    app,
  }
}
