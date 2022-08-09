import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path:'/presupuesto/:nombre/:apellido',
      component: () => import('../views/PresupuestoView.vue'),
      props: true,
    },
    {
      path:'/nopresupuesto',
      component: () => import('../views/NoPresupuestoView.vue'),
    },
    {
      path:'/viajes/:precio',
      component: () => import('../views/ViajesView.vue'),
    },
    {
      path:'/paris',
      component: () => import('../views/ParisView.vue')
    },
    {
      path:'/roma',
      component: () => import('../views/RomaView.vue')
    },
    {
      path:'/liverpool',
      component: () => import('../views/LiverpoolView.vue')
    },
    {
      path:'/guiza',
      component: () => import('../views/GuizaView.vue')
    },
    {
      path:'/india',
      component: () => import('../views/IndiaView.vue')
    },
    {
      path:'/barcelona',
      component: () => import('../views/BarcelonaView.vue')
    }
    
  ]
})

export default router
