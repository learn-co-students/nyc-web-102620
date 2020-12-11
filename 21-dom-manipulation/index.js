/*********** CRUD with the DOM ***********/
// https://developer.mozilla.org/en-US/
// https://www.w3schools.com/cssref/css_selectors.asp 

// READ
let menu = document.querySelector("#menu")
let firstPost = document.querySelector(".post")
let allPosts = document.querySelectorAll(".post")

// UPDATE
// step 1: find the element
let h4ToUpdate = firstPost.querySelector("h4")
// step 1: update it!
h4ToUpdate.textContent = "I neeed more sleep"

let title = menu.querySelector(".logo")
title.style.color = "white"

// DELETE
// step 1: find the element
let raffysMeanComment = document.querySelector('h2')
// step 2: remove it from the DOM!
raffysMeanComment.remove()

// CREATE  
/*
document.createElement()
append -> can take 1 or many arguments, adds elements to end of children list
prepend -> can take 1 or many arguments, adds elements to beginning of children list
appendChild -> only takes one argument
*/
let postsArray = [
    {
        meme: 'pics/dino.jpeg',
        description: 'Ahhh!!!'

    },
    {
        meme: 'pics/elvish.jpeg',
        description: 'Hmm 🤔'

    },
    {
        meme: 'pics/space.jpeg',
        description: 'Have standards people, standards!!!'

    },
    {
        meme: 'pics/restaurant.jpg',
        description: 'Let\'s wine & dine!'

    }
]

/*********** TECHNIQUE 1 - hand crafted elements; artisinal ***********/
/*
Pros - does not re-parse and re-create anything, computationally
faster in most cases, we have a reference to all the elements we create
Cons - many find this to be tedious, have to be more
thoughtful about the relationships between elements
*/
postsArray.forEach(function (postObj) {
// 1. Create elements that I want to add to page
let div = document.createElement('div')
let imageDiv = document.createElement('div')
let img = document.createElement('img')
let newH4 = document.createElement('h4')

// 2. Add the attributes and properties that we want the elements to have
div.classList.add("post")
imageDiv.classList.add("image")
newH4.classList.add("description")
newH4.textContent = postObj.description
img.src = postObj.meme

// 3. Find where on the page we want to append these elements to, and add them in the appropriate order
let listings = document.querySelector("#listings")
imageDiv.append(img)
div.append(imageDiv, newH4)
listings.append(div)

})

/*********** TECHNIQUE 2 - innerHtml ***********/
/*
Pros - quick for us as developers to write out
Cons - security considerations, corrupts existing elements,
it reparses the elements it's being used on (computationally expensive), if we wanted
a reference to any element in the HTML we added then we still need to querySelect it
*/
// let listings = document.querySelector("#listings")
// postsArray.forEach(function (postObj) {
//     // 1. find the element where I want to add the divs to
//     listings.innerHTML += `
//     <div class="post">
//         <div class="image">
//                <img src="${postObj.meme}">
//         </div>
//         <h4 class="description">${postObj.description}</h4>
//     </div> `
// })



/*********** TECHNIQUE 3 - insertAdjacentHTML ***********/
/*
Pros - quick for us as developers to write out, doesn't reparse
the element it's being used on
Cons - security considerations, if we wanted
a reference to any element in the HTML we added then we still need to querySelect it
*/
// postsArray.forEach(function (postObj) {
//     // 1. find the element where I want to add the divs to and string interpolate wherever I need to
//     listings.insertAdjacentHTML('beforeend', `
//     <div class="post">
//         <div class="image">
//                <img src="${postObj.meme}">
//         </div>
//         <h4 class="description">${postObj.description}</h4>
//     </div> `)
// })