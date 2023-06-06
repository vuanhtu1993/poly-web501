import Header from "../components/header"
// Destructoring
import { useState, useEffect } from '../lib'

const HomePage = function () {
    const [books, setBooks] = useState([])
    useEffect(function () {
        // call API
        fetch('http://localhost:3000/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setBooks(data)
            })
    }, [])
    return /*html*/`
        <div>
            ${Header()}
            <h1>HomePage</h1>
            <div class="grid grid-cols-4 gap-3">
            ${books.map(function (book) {
        return /*html*/`
                <a href="/product/${book.id}" class="block group">
                    <img
                        src="${book.images?.[0]}"
                        alt=""
                        class="object-cover w-full rounded aspect-square"
                    />
                    <div class="mt-3">
                    <h3
                        class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        ${book.name}
                    </h3>
                    <p class="mt-1 text-sm text-gray-700">${book.original_price}</p>
                    </div>
                </a>      
                `
    }).join("")}
            </div>
            
        </div>
    `
}

export default HomePage