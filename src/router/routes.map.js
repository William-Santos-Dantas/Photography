import Index from '@/pages/index'
import Contact from '@/pages/contact'
import About from '@/pages/about'
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [
            {
                path: '/',
                component: Index,
                name: 'Index',
                meta: {
                    title: 'Jutai F Dantas'
                }
            },
            {
                path: '/about',
                component: About,
                name: 'About',
                meta: {
                    title: 'About - Jutai F Dantas'
                }
            },
            {
                path: '/contact',
                component: Contact,
                name: 'Contact',
                meta: {
                    title: 'Contact - Jutai F Dantas'
                }
            },
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children: [

        ]
    },

]

export default routes