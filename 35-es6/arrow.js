// # Arrow functions: Key Questions
// - How do arrow functions treat `this` differently than traditional functions?
// - When do I need { } curly braces with an arrow function? When can I skip them?

// - Under what circumstances will an arrow function implicitly return?

// Arrow Function
// Single-line
// No curlies

// If you have exactly one parameter, you don't need parentheses ()

// .then(res => res.json())



let funcReturning3 = () => 3
let funcReturningChicken = () => "chicken"
let funcReturningObj = () => ({hello: "Abc"})

let funcExplicit = () => {
    return {
        goodbye: "XYZ"
    }
}



let arrayOfNumbers = [100, 23, 41, 192, 231]
let arrayOfStrings = ["zebra", "aardvark", "penguin", "chicken", "beef"]
let arrayOfObjs = [{name: "zebra"}, {name: "aardvark"}, {name: "penguin"}]


// ******* MAP

// Transforms an array
// Application: [{}, {}] -> [<>, <>]
    // Does not mutate the original array
    // Callback should return the transformation

let doubleNums = arrayOfNumbers.map(num => num * 2)

// let doubleNums = arrayOqfNumbers.map((num) => {
    // return num * 2
// })


// *******




// ******* FILTER

    // Returns a subarray satisfying a condition
        // Does not mutate the original array
        // Callback should return a boolean

    let evenNums = arrayOfNumbers.filter(num => num % 2 === 0 )

    // let evenNums = arrayOfNumbers.filter((num) => {
    //     return num % 2 === 0 
    // })

// *******






// ******* SORT

    // Mutates the original array
        // Callback should return a positive/negative number

    let copyOfNum = [...arrayOfNumbers]
    let copyOfStrings = [...arrayOfStrings]
    let copyOfObjs = [...arrayOfObjs]


    copyOfNum.sort((numA, numB) => {
        return numA - numB
    })

    copyOfStrings.sort((strA, strB) => {
        return strA.localeCompare(strB)
    })

    copyOfObjs.sort((objA, objB) => {
        return objA.name.localeCompare(objB.name)
    })




// *******
