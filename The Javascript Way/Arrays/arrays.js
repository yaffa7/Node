
const myArray = [1,2,3,4,5]
const otherArray = []
for (let i = 0; i < myArray.length; i++) {
  // Use myArray[i] to access each array element one by one
}

myArray.forEach(myElement => {
  // Use myElement to access each array element one by one
  otherArray.push(myElement)
});

for (const myElement of myArray) {
  // Use myElement to access each array element one by one
    otherArray.push(myElement)
}

