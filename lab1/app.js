// Khai báo DOM
const searchBtn = document.querySelector("#search-btn")
const closeBtn = document.querySelector("#close-btn")
const modal = document.querySelector("#modal")
const articlesElement = document.querySelector("#articles")
const searchInput = document.querySelector("#search-input")

// data
const articles = [
    {
        title: "A Complete Guide to Flexbox",
        description: "Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart."
    },
    {
        title: "A Complete Guide to CSS Grid",
        description: "Our comprehensive guide to CSS grid, focusing on all the settings both for the grid parent container and the grid child elements."
    },
    {
        title: "Quick LocalStorage Usage in Vue",
        description: "Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart."
    }
]

searchInput.addEventListener('keyup', function (event) {
    console.log(event.target.value);
})

// Add event listener
searchBtn.addEventListener('click', function () {
    modal.style.display = "flex"
})

closeBtn.addEventListener('click', function () {
    modal.style.display = "none"
})

// Render
function render(data) {
    let text = ""
    data.forEach(article => {
        text += `<div>
            <h2 class="text-xl">${article.title}</h2>
            <p>${article.description}</p>
        </div>`
    });
    articlesElement.innerHTML = text
}

render(articles)