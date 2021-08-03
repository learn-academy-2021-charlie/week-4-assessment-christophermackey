// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleArray", () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    test("removes the first item from the array and shuffles the remaining content.", () => {
      expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["green", "blue", "yellow", "pink"]))
      expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
    )})
  })
//At first, I tried using my function logic inside of the test expect.toEqual() method but kept getting an error.
//I also tried using colors1.includes() inside of that method but got an error because that only returns a boolean value.
//After some hardcore googling I found the jestjs.io website with 50+ different expect methods!
//The method that ended up working was expect.arrayContaining()

// b) Create the function that makes the test pass.

const shuffleArray = (array) => {
    let shuffled = array.slice(1, array.length)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return shuffled
}
shuffleArray(colors1)
shuffleArray(colors2)
//For the function I used a slice() method on the array to essentially remove the first value. 
//I followed that with an array shuffler logic courtesy of stack overflow.
//The combination of the two allows the array to be shuffled without original 0th index present.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minToMaxArray", () => {
    test("returns an array of the minimum and maximum numbers in that order", () => {
      expect(minToMaxArray(nums1)).toEqual([-8, 90])
      expect(minToMaxArray(nums2)).toEqual([5, 109])
    })
  })
//returns ReferenceError: minToMaxArray is not defined. Great success!

// b) Create the function that makes the test pass.

//declare minToMaxArray and pass in array
//use math.max/min and pass in spread operator of array to find min/max values
//declare variable to store above value
//return above value sorted with .sort()
const minToMaxArray = (array) => {
    let newArray = [Math.max(...array), Math.min(...array)]
    return newArray.sort((a, b) => a - b)
}
minToMaxArray(nums1)
minToMaxArray(nums2)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("oneArray", () => {
    test("returns one array with no duplicate values", () => {
      expect(oneArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
  })
//Returns oneArray is not defined

// b) Create the function that makes the test pass.

//declare oneArray function
//concat both input arrays
// use for loop to iterate through array
// use if statement to see if current index is strictly equal to previous index
//push to new array
//declare new array to accept above values
//return new array
const oneArray = () => {
    let sumArray = testArray1.concat(testArray2)
    var uniqueArray = []
    for(i=0; i < sumArray.length; i++){
        if(uniqueArray.indexOf(sumArray[i]) === -1) {
            uniqueArray.push(sumArray[i]);
        }
    }
    return uniqueArray
}
console.log(oneArray());