/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "green"


/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
function renderAnimalSightingPost(animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
const animalToRemove = document.querySelector("[data-id='3']")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
// function toggleColor(event) {
//     const element = event.target
//     console.log(element)
//     if (element.style.color === "green") {
//         element.style.color = "black"
//     } else {
//         element.style.color = "green"
//     }
// }

// header.addEventListener('click', toggleColor)



function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "black"
    } else {
        element.style.color = "green"
    }
}

header.addEventListener('click', function (event) {
    // toggleColor(event.target)
    toggleColor(header)
    // console.log(header === event.target) // true
})

/***** Deliverable 2 *****/
const likeBtn = document.querySelector('button.like-button')

likeBtn.addEventListener('click', function () {
    const pLikes = document.querySelector('p.likes')
    // let likeNum = pLikes.textContent.substring(0,5) // won't work with integers that have more or less than 4 digits
    let likeNum = parseInt(pLikes.textContent)
    // likeNum ++
    // likeNum += 1
    // ++likeNum
    likeNum = likeNum + 1

    pLikes.textContent = `${likeNum} Likes`
    traveler.likes = likeNum
    // console.log('traveler likes, ', traveler.likes)
})

/***** Deliverable 3 *****/

const form = document.querySelector("form#new-animal-sighting-form")
console.log(form)

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const species = event.target.species.value
    const link = event.target.link.value
    const photo = event.target.photo.value
    const description = event.target.description.value

    const lastIndex = traveler.animalSightings.length - 1
    const id = traveler.animalSightings[lastIndex].id + 1

    renderAnimalSightingPost({ species, link, photo, description, id })

    animalsUl.append(li)
    event.target.reset()

    /******************** Another method of solving this ********************/
    // const animalObject = {
    //     id: traveler.animalSightings[lastIndex].id + 1,
    //     species: event.target.species.value,
    //     link: event.target.link.value,
    //     photo: event.target.photo.value,
    //     description: event.target.description.value
    // }
    // renderAnimalSightingPost(animalObject)

    // animalsUl.append(li)
    // event.target.reset()


    /******************** another method of doing it ********************/
    // const speciesInput = event.target.species.value
    // const linkInput = event.target.link.value
    // const photoInput = event.target.photo.value
    // const descriptionInput = event.target.description.value

    // const lastIndex = traveler.animalSightings.length - 1
    // const id = traveler.animalSightings[lastIndex].id + 1

    // const animalObject = {
    //     id: id,
    //     species: speciesInput,
    //     link: linkInput,
    //     photo: photoInput,
    //     description: descriptionInput
    // }
    // renderAnimalSightingPost(animalObject)

    // animalsUl.append(li)
    // event.target.reset()
})
