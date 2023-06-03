// const btnSwitch = document.createElement('button')
// btnSwitch.innerText = "Switch"
// const bulb = document.createElement('img')
// bulb.src = "./images/on.png"
// bulb.style.maxWidth = "100px"

// document.body.appendChild(bulb)
// document.body.appendChild(btnSwitch)

// btnSwitch.addEventListener('click', function () {
//     if (bulb.src == "http://127.0.0.1:5500/lesson4/images/on.png") {
//         bulb.src = "./images/off3.png"
//     } else {
//         bulb.src = "./images/on.png"
//     }

// })

// const component = {
//     status: false,
//     render: function () {
//         return `
//         <div>
//         ${this.status
//                 ? `<img width="100px" src="./images/on.png"/>`
//                 : `<img width="100px" src="./images/off.png"/>`}
//             <button id="switch">Switch</button>
//         </div>
//     `
//     },
//     afterRender: function () {
//         console.log('xxxx');
//         document.querySelector('#switch').onclick = function () {
//             this.status = !this.status
//             component.render()
//         }
//     }
// }

// const useState = function (initState) {
//     let state = initState
//     const setState = function (newState) {
//         state = newState
//     }
//     return [state, setState]
// }


let status = false
const render = function () {
    document.body.innerHTML = `<div>
    ${status
            ? `<img style="max-width: 100px" src="./images/on.png"/>`
            : `<img style="max-width: 50px" src="./images/off.png"/>`}
        <button id="switch">Switch</button>
    </div>
    `
    document.querySelector('#switch').onclick = function () {
        status = !status
        render()
    }
}

render()