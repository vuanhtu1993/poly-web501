import Navigo from 'navigo'

import '../style.css'
import HomePage from './pages/home'
import ProductPage from './pages/product'
import NotFoundPage from './pages/notFound'
const app = document.querySelector("#app")



// Router
const router = new Navigo('/')
router.on('/', function () {
  console.log("Homepage");
  app.innerHTML = HomePage()
})

router.on('/product', function () {
  console.log("ProductPage");
  app.innerHTML = ProductPage()
})

router.notFound(function () {
  app.innerHTML = NotFoundPage()
})

router.resolve()