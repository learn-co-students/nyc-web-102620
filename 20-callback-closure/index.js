function takesThreeArguments(firstArg, secondArg, thirdArg){
    // console.log(firstArg, secondArg, thirdArg)
    console.log("FIRST:", firstArg)
    console.log("SECOND:", secondArg)
    console.log("THIRD:", thirdArg)
}

// Function invocation:
// takesThreeArguments()

// Function defintion:
// takesThreeArguments

// Which allows us to do something like this
// let arrayOfFunctions = [takesThreeArguments, takesThreeArguments]

// The callback -> Function definition (takesThreeArguments) being passed into a function invocation (forEach)

    // Callbacks are at the mercy of the function receiving the callback
    // Arguments of a callback are always determined by the function receiving the callback
    // The return value of a callback may be used by the function receiving the callback

let arrayOfStrings = ["Ethan", "Michelle", "Eric"]
arrayOfStrings.push("Greg")



// Using a named function definition:
// arrayOfStrings.forEach(takesThreeArguments)

// OR

// Using an anonymous callback function:
// arrayOfStrings.forEach( function(element, index, origArr){
//     console.log(element)
//     console.log(index)
//     console.log(origArr)
// } )




// ANOTHER CALLBACK EXAMPLE:
// saysHello is the callback being passed into the setTimeout

function saysHello(){
    console.log("Hello")
}

setTimeout(saysHello, 3000)

// OR

setTimeout( function(){
    console.log("Goodbye")
} , 3000 )







// *********************************

// CLOSURE - 
// Variables in the inner function(s) has access to variables from the outer function
// Variables can go from outside-in, but not inside-out


let outsideVariable = "Hello, I am outside"


function logsEachArgument(array){
    let chicken = "Bawk bawk"

    array.forEach( function(element){
        // `element` exists
        // `chicken` exists
        // `outsideVariable` exists
    } )

    // `element` will not exist
    // `chicken` exists
    // `outsideVariable` exists

}


// `element` will not exist
// `chicken` will not exist
// `outsideVariable` exists

logsEachArgument([1,2,3,4])