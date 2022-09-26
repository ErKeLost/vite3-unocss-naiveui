import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import Router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(Router)
app.mount('#app')
