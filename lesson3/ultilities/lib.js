import Navigo from "navigo"

const router = new Navigo('/', { linksSelector: "a" })

const render = function (container, component) {
    container.innerHTML = component()
}

export {
    render,
    router
}