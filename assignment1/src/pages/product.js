import data from '../../db.json' assert {type: "json"}
import Header from "../components/header"

const ProductPage = function (param) {
    console.log(param.data.id);
    const book = data.find(function(item) {
        return item.id == param.data.id //boolean
    })
    console.log(book);
    return /*html*/`
        <div>
            ${Header()}
            <div class="flex flex-row gap-2">
                <img class="w-[50%]" src="${book.images[0]}"/>
                <div class="">
                    <h1>${book.name}</h1>
                </div>
            </div>
            <p>${book.description}</p>
        </div>
    `
}

export default ProductPage