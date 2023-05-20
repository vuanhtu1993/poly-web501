import Footer from "./footer"
import Header from "./header"

const UserLayout = function (page) {
    return /*html*/`
        <div>
            ${Header()}
            ${page()}
            ${Footer()}
        </div>
    `
}

export default UserLayout