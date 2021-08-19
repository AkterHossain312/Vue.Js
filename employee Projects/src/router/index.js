import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Department from '../views/Department.vue'
import Employee from '../views/Employee.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/department',
    name: 'Department',
    component:Department
}
,
{
    path:'/employee',
    name: 'Employee',
    component:Employee
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
