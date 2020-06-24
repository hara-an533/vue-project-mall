import Vue from "vue"
import Router from "vue-router"
import VueRouter from "vue-router"

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home =()=>import("views/home/Home")
const Category =()=>import("views/category/Category")
const ShopCart =()=>import("views/shopcart/ShopCart")
const Profile =()=>import("views/profile/Profile")

//安装插件
Vue.use(VueRouter)

//创建Router
const routes =[
    {path:"/",redirect:'/home'},
    {path:"/home",component:Home},
    {path:"/category",component:Category},
    {path:"/shopcart",component:ShopCart},
    {path:"/profile",component:Profile},
]

const router= new VueRouter({
    routes,
    mode:"history"
})

export default router