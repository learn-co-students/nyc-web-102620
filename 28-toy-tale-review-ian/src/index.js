let addToy = false;

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");

addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyFormContainer.style.display = "block";
  } else {
    toyFormContainer.style.display = "none";
  }
});

/*
- When a user submits the toy form, 
a `POST` request is sent to `http://localhost:3000/toys` 
and the new toy is added to Andy's Toy Collection.
- The toy should conditionally render to the page.

- When the toy form is submitted


- Make a POST /toys
  - need to include the toy data from the form in that POST request!
- also need to add the newly created to to the DOM (renderOneToy)
*/
const createToy = document.querySelector(".add-toy-form")
createToy.addEventListener("submit", (event) => {
  event.preventDefault()
  const newToyObj = {
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0
  }

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newToyObj)
  }

  fetch("http://localhost:3000/toys", config)
    .then(response => response.json())
    .then(toyObj => renderOneToy(toyObj))

})

const toyCollection = document.querySelector("#toy-collection")

toyCollection.addEventListener("click", event => {
  if (event.target.matches(".like-btn")) {

    const id = event.target.dataset.id
    const cardDiv = event.target.closest(".card")
    const likesPtag = cardDiv.querySelector("p")
    const newNumberOfLikes = parseInt(likesPtag.textContent) + 1

    const config = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        likes: newNumberOfLikes
      })
    }

    fetch(`http://localhost:3000/toys/${id}`, config)
      .then(response => response.json())
      .then(toyObj => {
        likesPtag.textContent = `${toyObj.likes} Likes`
      })
    
  }
})


function renderOneToy(toyObj) {
  const div = document.createElement("div")
  div.className = "card"
  div.innerHTML = `
  <h2>${toyObj.name}</h2>
  <img src="${toyObj.image}" class="toy-avatar" />
  <p>${toyObj.likes} Likes</p>
  <button class="like-btn" data-id="${toyObj.id}">Like <3</button>
  `
  toyCollection.append(div)
}

function renderAllToys(toyArray) {
  toyArray.forEach(toyObj => {
    renderOneToy(toyObj)
  })  
}

fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then(toyArray => {
    renderAllToys(toyArray)
  })