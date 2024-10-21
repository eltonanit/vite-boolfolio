import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './pages/PageHome.vue';
import PagePortfolio from './pages/PagePortfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/homepage',
            name: 'homepage',
            components: PageHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            components: PagePortfolio
        }
    ]
})

export { router }