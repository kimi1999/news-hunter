import VueRouter from 'vue-router'
import Setting from './views/Setting'
import Index from './views/Index'
import Search from './views/Search'

const routes = [
    {
        path: '/setting',
        component: Setting
    },
    {
        path: '/',
        component: Index
    },
    {
        path: '/search',
        component: Search
    }
];
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

export default router;
