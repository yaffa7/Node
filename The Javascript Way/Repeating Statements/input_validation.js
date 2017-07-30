console.log("Enter a number greater than 100")
process.stdin.on('data', function(data) {
    let input = parseInt(data)
    if (input <= 100) {
        console.log(input + " is not greater than 100! exiting..")
        process.exit()
    } else {
        console.log("You entered: " + input)
    }
})
    
