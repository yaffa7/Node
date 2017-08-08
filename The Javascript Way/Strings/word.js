const wordinfo = require('./info.js')

console.log("Please enter a word")

process.argv.forEach( arg => {
    if(process.argv.indexOf(arg) > 1) {
        wordinfo.printWordStats(arg)
    }
})
