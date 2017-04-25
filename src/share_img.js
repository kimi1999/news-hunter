// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ShareImgApp from './views/ShareImgApp'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<ShareImgApp/>',
//   components: { ShareImgApp }
// })

const app = new Vue({
  render: (h)=>h(ShareImgApp)
}).$mount('#shareImgApp');
