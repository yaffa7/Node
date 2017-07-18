/* search all numbers in numbers.txt
for --target arg. Return true or false is
number is in txt
*/

const fs = require('fs');

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

function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(items[middle] != value && startIndex < stopIndex){

        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

console.log("Searching array of length " + numbers.length);
if (binarySearch(numbers.sort(),target) >=0) {
    console.log(target + " was in the array");
} else {
    console.log(target, "was not in the array");
}
