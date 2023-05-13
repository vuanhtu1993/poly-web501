// var a = 10
// var a = 20

// console.log(a);

// // ES6 let const
// let a = 10
// a = 20
// // contanst - hằng số
// const b = 10
// const pi = 3.1412
// pi = 3
// const g = 9.8

// Toán tử
// >= <= == toán từ so sánh
// const error = 4
// if (error > 0) {
//     console.log("Có lỗi xảy ra");
// } else {
//     console.log("Thành công");
// }

// Loop
// đk ban đầu
// đk kết thúc
// bước nhảy
// let sum = 0;
// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i % 2 != 0) {
//         sum += i
//     }
// }
// console.log(sum);

// Hoisting

// Function
// function sum1(a, b) {
//     // console.log(a + b);
//     return a + b
// }

// console.log(sum1(10, 20));

// // const s = sum(10, 20)
const sum2 = function (a, b) {
    return a + b
}
// Default parameter
// function areaCircle(r, PI = 3.1412) {
//     return PI * r * r
// }

// console.log(areaCircle(10));

const sv1 = "Vũ Xuân Hoàng"
const sv2 = "Hoàng Hải Hưng"
const sv3 = "Lê Đình Mạnh"

const arr1 = ["Vũ Xuân Hoàng", "Hoàng Hải Hưng", "Lê Đình Mạnh", "Phạm Ngọc Vừa Đẹp Trai vừa học giỏi Tuấn"]

// Duyệt
// for (let i = 0; i < arr1.length; i++) {
//     const name_arr = arr1[i].split(" ")
//     const length = name_arr.length
//     console.log(name_arr[length - 1]);
// }

// ForEach
// Anonymous function
// arr1.forEach(function (item, index) {
//     const name_arr = item.split(" ")
//     const length = name_arr.length
//     console.log(name_arr[length - 1]);
// })

// console.log(arr2);

// Map
// const new_arr = arr1.map(function (item, index) {
//     const name_arr = item.split(" ")
//     const length = name_arr.length
//     return name_arr[length - 1]
// })

// console.log(new_arr);

// OOP
// Constructor function
const car = new Object({
    brand: "Volvo",
    color: "White",
    engine: "v8",
    run: function () {
        console.log("It's runnung");
    },
    brake: function () {
        console.log("It's braking");
    },
    showInfo: function () {
        console.log(this.brand + " " + this.color + " " + this.engine);
    }
})

// Object literal
const car2 = {
    brand: "Volvo",
    color: "White",
    engine: "v8",
    run: function () {
        console.log("It's runnung");
    },
    brake: function () {
        console.log("It's braking");
    },
    showInfo: function () {
        console.log(this.brand + " " + this.color + " " + this.engine);
    }
}

// Prototype 
const Car = function (brand, color, engine) {
    this.brand = brand
    this.color = color
    this.engine = engine
    this.showInfo = function () {
        console.log(this.brand + " " + this.color + " " + this.engine);
    }
}

const car3 = new Car("Mercedes", "Black", "v8")

// OOP

// Khai bao DOM (DOM declaration)
const oop = document.querySelector("#oop")
function changeColor() {
    const colors = ["red", "blue", "yellow", "gray"]
    const text = oop.innerHTML
    const arr = text.split("")
    const new_arr = arr.map(function (word, index) {
        if (index + 1 > colors.length) {
            return `<span style="color:${colors[index % 4]}">` + word + "</span>"
        }
        return `<span style="color:${colors[index % 4]}">` + word + "</span>"
    })
    console.log(new_arr);
    oop.innerHTML = new_arr.join("")
}