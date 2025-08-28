import { createApp } from 'vue'
import { Quasar } from 'quasar'
import './style.css'
import "quasar/src/css/index.sass"
import App from './App.vue'


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { all } from '@awesome.me/kit-KIT_CODE/icons'
// library.add(...all)

import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import HotelHome from './pages/HotelHome.vue'


const routes = [
    {
        path: '/hotel',
        name: 'HotelHome',
        component: HotelHome,
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App)
    // .component('font-awesome-icon', FontAwesomeIcon)
    .use(router).use(Quasar, { plugins: {} })
    .mount("#app");
