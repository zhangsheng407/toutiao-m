import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less' // 引入全局样式
// 引入vant（所有的组件）
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入amfe-flexible适配rem基准值
import 'amfe-flexible'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
