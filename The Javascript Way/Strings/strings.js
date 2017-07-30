const name = "brendan"
console.log(name)

Array.from(name).forEach( letter => {
    console.log(letter)
})

const song = "Honky Tonk Women";

console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("Tonk")); // false because of case sensitivity


const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(",");
console.log(months[0]);  // "Jan"
console.log(months[11]); // "Dec"