import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import ButtonCustomize from '@/views/Button.vue'
import InputCustomize from '@/views/Input.vue'
import TextCustomize from '@/views/Text.vue'
import ZagolovokCustomize from '@/views/Zagolovok.vue'
import SsilkiCustomize from '@/views/Ssilki.vue'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },  {
            path: '/button',
            component: ButtonCustomize ,
        }, {
            path: '/input',
            component: InputCustomize ,
        }, {
            path: '/text',
            component: TextCustomize ,
        }, {
            path: '/zagolovok',
            component: ZagolovokCustomize ,
        }, {
            path: '/ssilki',
            component: SsilkiCustomize ,
        },
    ],
})
