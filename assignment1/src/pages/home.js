import Header from "../components/header"
import data from '../../db.json' assert {type: 'json'}

const HomePage = function () {
    console.log(data);
    return /*html*/`
        <div>
            ${Header()}
            <h1>HomePage</h1>
            <div class="grid grid-cols-4 gap-3">
            ${data.map(function (book) {
                return /*html*/`
                <a href="#" class="block group">
                    <img
                        src="${book.images[0]}"
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