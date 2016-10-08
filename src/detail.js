// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Detail from './detail'
const app = new Vue({
    render: (h)=>h(Detail)
}).$mount('#app');
