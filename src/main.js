import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//导入Mint UI
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//导入MUI的样式表
import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
