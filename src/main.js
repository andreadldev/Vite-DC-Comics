import { createApp } from 'vue'
import './assets/css/style.scss'
import App from './App.vue'
import comicsList from './dc-comics.json' assert {type: 'json'}

createApp(App).mount('#app')
