import { router, render } from './lib'

import '../style.css'
import HomePage from './pages/home'
import ProductPage from './pages/product'
import NotFoundPage from './pages/notFound'
import Dashboard from './pages/dashboard'
import ProductAdd from './pages/add'
import ProductUpdate from './pages/update'
const app = document.querySelector("#app")



// Router
router.on('/', function () {
  render(HomePage, app)
})

router.on('/product/:id', function (param) {
  render(ProductPage, app)
})

router.on('/admin', function () {
  render(Dashboard, app)
})


router.on('/admin/product/add', function () {
  render(ProductAdd, app)
})

router.on('/admin/product/:id', function ({ data: { id } }) {
  // Object destructoring
  render(() => ProductUpdate(id), app)
})


router.notFound(function () {
  render(NotFoundPage, app)
})

router.resolve()