// function addLinkScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement("script"); // <script>
//         script.src = src; // <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js">
//         script.onload = function () {
//             resolve(script);
//         };
//         script.onerror = function () {
//             reject("Có lỗi xảy ra");
//         };
//         document.head.append(script); // <head><script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></head>
//     });
// }

function addLinkScript(src, cb) {
    let script = document.createElement("script"); // <script>
    script.src = src; // <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js">
    script.onload = function () {
        cb()
    };
    script.onerror = function () {
        reject("Có lỗi xảy ra");
    };
    document.head.append(script); // <head><script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></head>

}



addLinkScript(
    "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
    function () {
        console.log(_.add(1, 2));
    }
);
