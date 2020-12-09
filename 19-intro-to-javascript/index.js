console.log('%cHello World', 'color: magenta')
// console.log('Hey!')


/**** PRIMITIVE DATA TYPES ****/
// symbol
// Undefined
// let name
// console.log(name)
// Null
// let friend = null
// console.log(null)
// Boolean
// Number
// let seven = 7
// let sevenPointFive = 7.5

// console.log(seven)
// console.log(sevenPointFive)
// String
// let name = "Michelle"
// let friend = 'Raffy'
// let phrase = name + " loves " + friend
// let temStr = `Hey there, ${friend}`
// let math = `two plus two is ${2+2}`
// console.log(math)
// BigInt
// debugger

let raffy = {
    "name-key": "Raffy",
    age: 9
}

// console.log(raffy.name)
// console.log(raffy["name-key"])


// let, const (block scoped {})
// var (function scoped)
// greeting = "hello"
// console.log(greeting)

let arr = [1, 2, 3, 4]

function isItEven(arrArg) {
    let a = "hello"
    
    if (arrArg.length % 2 === 0) {
        // return 8
    }
    else {
        console.log("It's odd")
        // return 7
    }
    console.log(a)
}

// let arrOfStrings = ["hello", "hi", "maybe", "so"]
// arrOfStrings.forEach(isItEven)

// arrOfStrings.forEach(function (element){
//     console.log(element)
// })




