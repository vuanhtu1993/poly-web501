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

router.on('/product/:id', function (param) {
  // console.log("param", param);
  app.innerHTML = ProductPage(param)
})

router.notFound(function () {
  app.innerHTML = NotFoundPage()
})

router.resolve()