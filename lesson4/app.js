// Imperative
// const bulb = document.createElement('img')
// bulb.src = "./images/off3.png"
// const btnSwitch = document.createElement('button')
// btnSwitch.innerText = "Switch"

// btnSwitch.onclick = function () {
//     if (bulb.src == "http://127.0.0.1:5500/lesson4/images/off3.png") {
//         bulb.src = "./images/on.png"
//     } else {
//         bulb.src = "./images/off3.png"
//     }
// }

// document.body.append(bulb)
// document.body.append(btnSwitch)

// Declarative

let state = false

function render() {
    document.body.innerHTML = /*html*/`
    <div>
        <img width="100" src="${state ? './images/on.png' : './images/off3.png'}"/>
        <button id="btnSwitch">Switch</button>
    </div>
    `
    document.querySelector('#btnSwitch').onclick = function () {
        state = !state
        render()
    }
}

render()