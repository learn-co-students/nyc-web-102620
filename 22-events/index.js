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




// element.addEventListener("EVENT_TYPE", function(evt){
// DO SOME LOGIC HERE TO ALTER THE DOM
// })

let newMemeForm = document.querySelector("form#newMemeForm")

newMemeForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    // preventDefault stops the default behavior of a form submission
    console.log("Form submission has happened")
    // evt.target is the element that is the recipient of the event -> In this case, the form
    // From the form, go find the input/textarea/select with a name OR ID
    // Call `.value` on that input/textarea/select

    let theMemeURL = evt.target.meme.value
    let theMemeDescription = evt.target.description.value
    turnMemeToHTML(theMemeURL, theMemeDescription)

    // RESETS THE FORM
    evt.target.reset()
})






let memeButton = document.querySelector("button#memeButton")

memeButton.addEventListener("click", function (evt) {
    // `evt` is an object with data about what just happened

    if (postsArray.length > 0) {
        let theMeme = postsArray.pop()
        // DOM MANIPULATION
        turnMemeToHTML(theMeme.meme, theMeme.description)
    } else {
        memeButton.textContent = "I'm all memed out."
    }

})





// SLAPPING ON THE DOM
// "", "" -> <html></html>
function turnMemeToHTML(memeUrl, memeDescription) {
    let outerMostDiv = document.createElement("div")
    outerMostDiv.className = "post"

    let imageDiv = document.createElement("div")
    imageDiv.className = "image"
    let memeImage = document.createElement("img")
    memeImage.src = memeUrl

    let memeDescriptionH4 = document.createElement("h4")
    memeDescriptionH4.textContent = memeDescription

    imageDiv.append(memeImage)
    outerMostDiv.append(imageDiv, memeDescriptionH4)

    let whereAllMemesLive = document.querySelector("div#listings")
    whereAllMemesLive.append(outerMostDiv)
}



// memeButton.addEventListener("contextmenu", function(){
//     console.log("Right click")
// })