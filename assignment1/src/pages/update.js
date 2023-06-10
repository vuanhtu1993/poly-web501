import { router, useEffect, useState } from "../lib"
import Joi from 'joi'

const updateSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    original_price: Joi.number().required(),
    short_description: Joi.string().required(),
    list_price: Joi.number(),
    quantity_sold: Joi.object(),
    rating_average: Joi.number(),
    images: Joi.array(),
    description: Joi.string(),
})

const ProductUpdate = function (id) {
    // Array destructoring
    const [book, setBook] = useState({})
    useEffect(() => {
        fetch("http://localhost:3000/books/" + id)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setBook(data)
            })
    }, [])

    useEffect(() => {
        const form = document.querySelector("#form")
        form.onsubmit = (event) => {
            event.preventDefault()
            const data = new FormData(form)
            const updatedBook = {
                // Spread operator
                ...book,
                name: data.get("name"),
                original_price: data.get("original_price"),
                short_description: data.get("short_description"),
            }
            const { error } = updateSchema.validate(updatedBook)
            if (!error) {
                fetch("http://localhost:3000/books/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedBook)
                }).then(() => {
                    alert("Cập nhật sản phẩm thành công")
                    router.navigate("/admin")
                })
            } else {
                alert(error.message)
            }

        }
    })
    console.log(book);
    return /*html*/`
    <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
            <h1>Cập nhật sản phẩm ${id}</h1>
            <img width="100%" src="${book.images?.[0]}"/>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4" id="form">
            <div>
                <label class="sr-only" for="name">Tên sản phẩm</label>
                <input
                    class="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Tên sản phẩm"
                    type="text"
                    name="name"
                    value="${book.name}"
                />
            </div>

            <div>
                <label class="sr-only" for="name">Giá sản phẩm</label>
                <input
                    class="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Giá sản phẩm"
                    type="number"
                    name="original_price"
                    value="${book.original_price}"
                />
            </div>

            <div>
                <label class="sr-only" for="message">Mô tả</label>
                <textarea
                    class="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Mô tả"
                    rows="8"
                    name="short_description"
                >${book.short_description}</textarea>
            </div>

            <div class="mt-4">
                <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Cập nhật
                </button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </section>
    `
}

export default ProductUpdate