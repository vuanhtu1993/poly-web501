import { router, useEffect } from "../lib"

const ProductAdd = function () {
    useEffect(() => {
        const form = document.querySelector("#form")
        form.onsubmit = (event) => {
            event.preventDefault()
            const data = new FormData(form)
            const book = {
                name: data.get("name"),
                original_price: data.get("original_price"),
                short_description: data.get("short_description"),
            }
            console.log(book);
            fetch("http://localhost:3000/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            }).then(() => {
                alert("Thêm sản phẩm thành công")
                router.navigate("/admin")
            })
        }
    })

    return /*html*/`
    <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
        <h1>Thêm mới sản phẩm</h1>
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
                />
            </div>

            <div>
                <label class="sr-only" for="name">Giá sản phẩm</label>
                <input
                    class="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Giá sản phẩm"
                    type="number"
                    name="original_price"
                />
            </div>

            <div>
                <label class="sr-only" for="message">Mô tả</label>
                <textarea
                    class="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Mô tả"
                    rows="8"
                    name="short_description"
                ></textarea>
            </div>

            <div class="mt-4">
                <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Thêm mới
                </button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </section>
    `
}

export default ProductAdd