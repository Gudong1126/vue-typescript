import Vue from 'vue'
import App from './App.vue'
import VueIconFont from 'vue-icon-font-pro'
import router from './router'
import store from './store'
import './plugins/vant.js'
import './assets/iconfont.js'

Vue.use(VueIconFont)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
