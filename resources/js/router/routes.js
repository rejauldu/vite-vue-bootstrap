import Home from '../components/Home.vue'
import Products from '../components/Products.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from  '../components/Login.vue'
import Register from  '../components/Register.vue'
import auth from './middlewares/auth'
import guest from './middlewares/guest'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/products', name: 'products', component: Products },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: {middleware: [auth]} },
    { path: '/login', name: 'login', component: Login, meta: {middleware: [guest]} },
    { path: '/register', name: 'register', component: Register, meta: {middleware: [guest]} },
  ]
  export default routes