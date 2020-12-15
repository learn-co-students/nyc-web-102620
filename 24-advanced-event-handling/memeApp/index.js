/****************** DOM Elements ******************/
let newMemeForm = document.querySelector("form#newMemeForm")
let header = document.querySelector("#menu h1.logo")
header.style.color = "white"


/******************* Render Helpers  ******************/
function renderOneMeme(postObject) {
    // 1. Create elements that I want to add to page
    let postDiv = document.createElement('div')
    let imageDiv = document.createElement('div')
    let img = document.createElement('img')
    let newH4 = document.createElement('h4')
    let deleteButton = document.createElement('button')

    let likeButton = document.createElement('button')
    let numOfLikesPtag = document.createElement('p')

    // 2. Add the attributes and properties that we want the elements to have
    postDiv.classList.add("post")
    imageDiv.classList.add("image")

    newH4.classList.add("description")
    newH4.textContent = postObject.description

    img.src = postObject.meme

    deleteButton.classList.add('delete-button')
    deleteButton.textContent = 'X'

    likeButton.classList.add('likes-button')
    likeButton.dataset.buttonType = 'upvote'
    likeButton.textContent = '👍'
    numOfLikesPtag.textContent = postObject.likes
    numOfLikesPtag.classList.add('likes-count')

    // 3. Find where on the page we want to append these elements to, and add them in the appropriate order
    let listings = document.querySelector("#listings")
    imageDiv.append(img, deleteButton)
    postDiv.append(imageDiv, newH4, numOfLikesPtag, likeButton)
    listings.append(postDiv)
}

function renderAllListings(memePostsArray) {
    memePostsArray.forEach((memePostObject) => {
        renderOneMeme(memePostObject)
    })
}

/******************* Event Listeners  ******************/

newMemeForm.addEventListener("submit", function (event) {
    event.preventDefault()
    let newMemeObject = {
        description: event.target.description.value,
        meme: event.target.meme.value,
        likes: 0
    }

    renderOneMeme(newMemeObject)
    event.target.reset()
})

/******************* Initial Render  ******************/
renderAllListings(postsArray)


// STEP 1: Find the closest common ancestor and add an event listener
const listings = document.querySelector('#listings')

listings.addEventListener('click', function (event) {
    // STEP 2: identify the element we care about by using some conditional logic to determine which element was clicked on
    if (event.target.matches('.delete-button')) {
        // STEP 3: DOM manipulation!
        const postDiv = event.target.closest('div.post')
        postDiv.remove()
    }
    else if (event.target.dataset.buttonType === 'upvote') {
        const postDiv = event.target.closest('div.post')
        const likesPtag = postDiv.querySelector('.likes-count')
        let numOfLikes = parseInt(likesPtag.textContent) + 1
        likesPtag.textContent = numOfLikes
    }
})