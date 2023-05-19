// Các phép tính toán
const PI = 3.1412
function rectangleArea(w, h) {
    return w * h
}

function circleArea(r) {
    return PI * r * r
}
// Cách 1
export {
    rectangleArea
}
// Cách 2
export default circleArea