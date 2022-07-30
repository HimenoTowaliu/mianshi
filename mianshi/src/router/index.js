import Vue from 'vue'
import VueRouter from 'vue-router'

import Js from "../components/Js/js.vue"
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:"/",
            name:'Jsd',
            component:Js
        }
    ]
})