const myFunc = function(param1,param2) {
    console.log(param1,param2)
}

//fat arrow function
const yourFunc = (param1,param2) => {
    console.log(param1,param2)
}


yourFunc("here","now")


const hello = name => `Hello ${name}!`
const square = x => {return x*x}

const array = [1,2,3,4,5,6,7,8,9,10]

array.forEach(element => {
    console.log(square(element))
})

console.log(hello("brendan"))