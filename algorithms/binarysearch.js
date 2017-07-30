/* search all numbers in numbers.txt
for --target arg. Return true or false is
number is in txt
*/

const fs = require('fs');
const search = require('SearchModule');

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var target = grab('--target');

var numbers = fs.readFileSync('./numbers.txt','utf-8',function(err,data) {
    if (err) {
        console.log(err);
    }
}).split(',');

console.log("Searching array of length " + numbers.length);
if (search.binarySearch(numbers.sort(),target) >=0) {
    console.log(target + " was in the array");
} else {
    console.log(target, "was not in the array");
}
