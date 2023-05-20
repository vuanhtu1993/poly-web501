import UserLayout from "./components/user-layout"
import ProductDetail from "./pages/detail"
import HomePage from "./pages/home"
import './style.css'
// DOM declaration
const app = document.querySelector("#app")

// template string
app.innerHTML = UserLayout(HomePage)