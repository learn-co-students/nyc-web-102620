// write your code here
/*
Click on an image from the #spice-images div and see all the info about that spice blend displayed inside the #spice-blend-detail div. You will need to make another GET request with the spice blend's ID to get the information about the spice blend that was clicked.

- when an image is clicked (get the ID associated with the spice)
- fetch GET /spiceblends/:id
- update the DOM using the API (maybe reuse our render helper?)

*/

/**** Application State ****/
let spiceblendId = 1



/**** DOM Elements ****/
// const spiceDetails = document.querySelector("#spice-blend-detail")
const titleH2 = document.querySelector(".title")
const spiceImage = document.querySelector(".detail-image")
const ingredientsList = document.querySelector(".ingredients-list")
const spiceblendTitleInput = document.querySelector("#spiceblend-title")
const updateForm = document.querySelector("#update-form")
const ingredientForm = document.querySelector("#ingredient-form")
const spiceImagesDiv = document.querySelector("#spice-images")

/**** Event Handlers ****/
spiceImagesDiv.addEventListener("click", event => {

  if (event.target.matches("img")) {

    spiceblendId = parseInt(event.target.dataset.id)

    getOneSpice(spiceblendId)
  }

})

ingredientForm.addEventListener("submit", event => {
  event.preventDefault()

  const ingredientObj = {
    name: event.target.name.value,
    spiceblendId: spiceblendId
  }

  createIngredient(ingredientObj)


  renderIngredient(ingredientObj)
})

updateForm.addEventListener("submit", event => {
  event.preventDefault()
  // get the data from the inputs
  // put together an object to send the server
  const updateObj = {
    title: spiceblendTitleInput.value
  }
  
  // const id = updateForm.dataset.id
  
  // make the PATCH
  updateSpice(spiceblendId, updateObj)
  
  //titleH2.textContent = updateObj.title

// - and then update the title in the DOM
})

/**** Render Functions ****/
function renderSpiceImage(spiceObj) {
  const img = document.createElement("img")
  img.src = spiceObj.image
  img.alt = spiceObj.title
  img.dataset.id = spiceObj.id
  spiceImagesDiv.append(img)
}

function renderIngredient(ingredientObj) {
  const li = document.createElement("li")
  li.textContent = ingredientObj.name
  ingredientsList.append(li)
}

function renderSpice(spiceObj) {
  titleH2.textContent = spiceObj.title

  spiceblendTitleInput.value = spiceObj.title
  updateForm.dataset.id = spiceObj.id

  spiceImage.src = spiceObj.image
  spiceImage.alt = spiceObj.title

  ingredientsList.innerHTML = "" // remove all the children

  spiceObj.ingredients.forEach(indgredient => {
    renderIngredient(indgredient)
  })

  // innerHTML approach

  // const lis = spiceObj.ingredients.map(ingredient => {
  //   return `<li>${ingredient.name}</li>`
  // })
  // spiceDetails.innerHTML = `
  // <img class="detail-image" src="${spiceObj.image}" alt="${spiceObj.title}" />
  // <h2 class="title">${spiceObj.title}</h2>

  // <div class="ingredients-container">
  //   <h4>Ingredients:</h4>
  //   <ul class="ingredients-list">
  //     ${lis.join("")}
  //   </ul>
  // </div>
  // `
}


/**** Fetch Functions ****/
function createIngredient(ingredientObj) {
  fetch('http://localhost:3000/ingredients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ingredientObj),
  })
}

function updateSpice(id, updateObj) {
  fetch(`http://localhost:3000/spiceblends/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateObj),
  })
  .then(response => response.json())
  .then(updatedSpice => { 
    titleH2.textContent = updatedSpice.title
  })
}

function getOneSpice(id) {
  fetch(`http://localhost:3000/spiceblends/${id}`)
    .then((r) => r.json())
    .then((spiceObj) => renderSpice(spiceObj));
}

function getAllSpices() {
  fetch("http://localhost:3000/spiceblends")
    .then((r) => r.json())
    .then((spiceArray) => {

      spiceArray.forEach(spiceObj => {
        renderSpiceImage(spiceObj)
      })

    });
}

/**** Initial Render ****/
getOneSpice(1);

getAllSpices()
