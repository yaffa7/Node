// function doSomeMath() {
//     var a  = 5;
//     var b = 4;

//     function multiply() {
//         var result = a*b;
//         return result;
//     }

//     return multiply;
// }

// var theResult = doSomeMath();


// console.log("The result: ", theResult());

//em

function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels/baseValue;
    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);

console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());