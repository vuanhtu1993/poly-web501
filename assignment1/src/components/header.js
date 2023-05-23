const Header = function () {
    return /*html*/`
        <nav class="bg-blue-400">
            <ul class="flex gap-2">
                <li><a data-navigo class="hover:text-red-400" href="/">Home</a></li>
                <li><a data-navigo class="hover:text-red-400" href="/product">Product</a></li>
                <li><a class="hover:text-red-400" href="/about">About</a></li>
                <li><a class="hover:text-red-400" href="/blog">Blog</a></li>
            </ul>
        </nav>
    `
}

export default Header