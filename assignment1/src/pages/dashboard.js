// Buoc 1
import { useState, useEffect } from '../lib'

const Dashboard = function () {
    // Buoc 2
    const [books, setBooks] = useState([])
    // Buoc 3
    useEffect(function () {
        fetch('http://localhost:3000/books')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                setBooks(data)
            })
    }, [])

    useEffect(function () {
        const btnDeletes = document.querySelectorAll(".delete")
        btnDeletes.forEach((btn) => {
            btn.onclick = function (event) {
                const id = btn.dataset.id
                if (id) {
                    fetch('http://localhost:3000/books/' + id, {
                        method: "DELETE"
                    }).then(() => {
                        alert("Xoá sản phẩm thành công")
                    })
                }

            }
        })
    })
    return /*html*/`
        <div>
            <h1>Dashboard</h1>
            <div class="p-2 flex justify-end">
                <a class="bg-slate-500" href="/admin/product/add">Thêm mới</a>
            </div>
            <div class="overflow-x-auto rounded-lg border border-gray-200">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Name
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Image
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Rate
                    </th>
                    <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Price
                    </th>
                    <th>
                        Thao tác
                    </th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            ${books.map(function (book) {
        return /*html*/`
                <tr>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ${book.name}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <img src="${book.images?.[0]}"/>
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.rating_average}</td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">${book.original_price}đ</td>
                    <td>
                        <button class="delete bg-red-600 p-2" data-id="${book.id}">Xoá</button>
                    </td>
                </tr>
                `
    }).join("")}
                
            </tbody>
            </table>
            </div>
        </div>
    `
}

export default Dashboard