import Index from '@/pages/index'
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
                    title: 'Index - Tsuru'
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