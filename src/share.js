// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueResource from 'vue-resource'
Vue.use(VueLazyload)
Vue.use(VueResource)
import ShareApp from './ShareApp'
const app = new Vue({
    render: (h)=>h(ShareApp)
}).$mount('#app');












