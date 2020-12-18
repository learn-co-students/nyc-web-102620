/********* DOM Elements *********/
const quoteListUl = document.querySelector("ul#quote-list")
const quoteForm = document.querySelector("#new-quote-form")


/********* Event Handlers *********/
quoteListUl.addEventListener("click", event => {
  // DELETE
  if (event.target.matches(".btn-danger")) {
    const id = event.target.dataset.id
    const quoteLi = event.target.closest(".quote-card")
    deleteQuote(id)
    // and remove the quote LI from the page
    quoteLi.remove()
  }
  // UPDATE
  if (event.target.matches(".btn-success")) {
    const id = parseInt(event.target.dataset.id)
    
    const newLikeObj = {
      quoteId: id
    }
    
    createLike(newLikeObj)

    // find the current number of likes
    const span = event.target.querySelector("span")
    // increment by 1
    const numberOfLikes = parseInt(span.textContent) + 1
    // update it on the DOM
    span.textContent = numberOfLikes
  }
})

quoteForm.addEventListener("submit", event => {
  event.preventDefault()

  // make a POST /quotes with the new quote data
    // get the data from the quote form
  const author = quoteForm.author.value
  const quote = quoteForm.quote.value

  const newQuoteObj = {
    quote: quote,
    author: author
  }

  // then send that data to the server
  createQuote(newQuoteObj)
})




/********* Render Functions *********/
function renderQuote(quoteObj) {
  // render each quote within ul#quote-list
  let likes = 0
  if (quoteObj.likes) {
    likes = quoteObj.likes.length
  }

  const quoteLi = document.createElement("li")
  quoteLi.className = "quote-card"
  quoteLi.innerHTML = `
    <blockquote class="blockquote">
      <p class="mb-0">
        ${quoteObj.quote}
      </p>
      <footer class="blockquote-footer">${quoteObj.author}</footer>
      <br />
      <button class="btn-success" data-id="${quoteObj.id}">Likes: <span>${likes}</span></button>
      <button class="btn-danger" data-id="${quoteObj.id}">Delete</button>
    </blockquote>
  `
  quoteListUl.append(quoteLi)
}



/********* Fetch Functions *********/
function createLike(likeObj) {
  fetch('http://localhost:3000/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeObj),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function deleteQuote(id) {
  fetch(`http://localhost:3000/quotes/${id}`, {
    method: 'DELETE',
  })
  // .then(r => r.json())
  // .then(() => {
  //   quoteLi.remove()
  // })
}

function createQuote(newQuoteObj) {
  fetch('http://localhost:3000/quotes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQuoteObj),
  })
  .then(response => response.json())
  .then(newQuoteObjFromServer => {
    // and add the new quote to the page
    renderQuote(newQuoteObjFromServer)
  })
}

function getQuotes() {
  fetch("http://localhost:3000/quotes?_embed=likes")
    .then(r => r.json())
    .then(quotesArray => {
      quotesArray.forEach(quoteObj => {
        renderQuote(quoteObj)
      })
    })
}


/********* Initial Render *********/
getQuotes()

