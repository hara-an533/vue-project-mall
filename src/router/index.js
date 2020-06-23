import Vue from "vue"
import VueRouter from "vue-router"

const Home =()=>import()

//安装插件
Vue.use(VueRouter)

//创建Router
const routes =[]

const router= new VueRouter({
    routes,
    mode:"history"
})

export default router