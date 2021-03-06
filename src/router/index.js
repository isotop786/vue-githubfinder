import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProjress from 'nprogress';
import 'nprogress/nprogress.css';


Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/single/:login',
    name:'Single',
    component: ()=>import ('../views/Single'),
   
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeResolve((to, from, next) => {
  if(to.path){
    NProjress.start()
  }
  next()
})

router.afterEach(()=>{
  NProjress.done()
  
})


export default router
