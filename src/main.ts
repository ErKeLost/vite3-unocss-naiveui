import '@unocss/reset/tailwind.css'
import './styles/main.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'
// import { createHead } from "@vueuse/head";
import Router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(Router)
// app.use(createHead());
app.mount('#app')
