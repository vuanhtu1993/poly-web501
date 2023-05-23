import UserLayout from "./components/user-layout"
import ProductDetail from "./pages/detail"
import HomePage from "./pages/home"
import './style.css'
import NotFoundPage from './pages/notFound';
import { router } from "./ultilities/lib";
// DOM declaration
const app = document.querySelector("#app")

// template string


// Router
router.on('/', function () {
    app.innerHTML = UserLayout(HomePage)
})

router.on('/product', function () {
    app.innerHTML = UserLayout(ProductDetail)
})

router.notFound(function () {
    app.innerHTML = NotFoundPage()
})

router.resolve()