const isPalindrome = word => {
    let target = word.toLowerCase()
    let startIndex = 0
    let endIndex = word.length - 1

    while (startIndex < endIndex) {
        if ( target[startIndex] !== target[endIndex]) {
            return false
        }
        startIndex++
        endIndex--
    }
    return true
}


const printWordStats = word => {
    console.log(`[${word}]`)
    console.log(`Word Length: ${word.length}`)
    process.stdout.write(`Lowercase values: `)
    Array.from(word).forEach(char =>{
        if (char === char.toLowerCase()){
            process.stdout.write(char)
        }
    })
    process.stdout.write(`\nUppercase Values: `)
    Array.from(word).forEach(char => {
        if (char === char.toUpperCase()) {
            process.stdout.write(char)
        }
    })
    process.stdout.write(`\nVowels in Word: `)
    Array.from(word).forEach(char => {
        if(char.toLowerCase() === 'a'
        || char.toLowerCase() === 'e'
        || char.toLowerCase() === 'i'
        || char.toLowerCase() === 'o'
        || char.toLowerCase() === 'u'
        || char.toLowerCase() === 'y')
        {
            process.stdout.write(char)
        }
    })
    process.stdout.write(`\nWord written backwards: `)
    for (let i = word.length -1;i >= 0;--i) {
        process.stdout.write(word[i])
    }
    process.stdout.write(`\nIs Palindrome: `)
    if (isPalindrome(word) == true) {
        process.stdout.write(`true`)
    } else {
        process.stdout.write('false')
    }

    process.stdout.write('\n')
}

console.log("Please enter a word")

process.argv.forEach( arg => {
    if(process.argv.indexOf(arg) > 1) {
        printWordStats(arg)
    }
})
