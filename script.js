// function square(x) {
//     return x * x
// }

// function addSquares(a, b) {
//     return square(a) + square(b)
// }

function addSquares(a, b) {
    const square = (x) => x * x
    return square(a) + square(b)
}


console.log(addSquares(2, 3))

