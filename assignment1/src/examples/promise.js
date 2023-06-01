// function addCDN(callback) {
//     let script = document.createElement("script")
//     script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
//     script.onload = function () {
//         console.log("Load xong roi anh oi");
//         callback()
//     }
//     script.onerror = function () {
//         console.log("Load loi roi anh oi");
//     }
//     document.head.append(script)
// }

const cdnPromise = new Promise(function (resolve, reject) {
    let script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.211/lodash.min.js"
    script.onload = function () {
        resolve("Load xong roi anh oi")
    }
    script.onerror = function () {
        reject("Load loi roi anh oi");
    }
    document.head.append(script)
})

// cdnPromise
//     .then(function (data) {
//         // console.log(data);
//         console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// Promise 
