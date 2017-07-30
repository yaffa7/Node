process.stdin.on('data', function(data) {
    let input = parseInt(data)
    if (input % 3 == 0 && input % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (input % 3 == 0) {
        console.log("Fizz")
    }
    else if (input % 5 == 0) {
        console.log("Buzz")
    }
})