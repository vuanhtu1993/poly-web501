import '../style.css'
import AdminLayout from './components/admin-layout'
import { render, router } from './lib'
import Dashboard from './pages/dashboard'
import HomePage from './pages/home'

const app = document.querySelector('#app')

router.on('/', function () {
  render(HomePage, app)
})

router.on('/admin', function () {
  render(() => AdminLayout(Dashboard), app)
})



router.resolve() 