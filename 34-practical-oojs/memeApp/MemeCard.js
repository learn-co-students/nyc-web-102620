/*
React(ish) Component
- [x] data (the properties that make each instance unique)
- [x] rendering (creating the DOM elements)
- [ ] events (event listening logic)
*/

// rule: if you are using a METHOD as a CALLBACK, write an arrow fn (or us bind)

class MemeCard {
  constructor(memeData) {
    this.memeData = memeData
    // option 1: explicit bind
    // this.updateLikes = this.updateLikes.bind(this)
  }

  // option 2: arrow function (public instance field)
  updateLikes = () => {
    // update likes for the instance
    this.memeData.likes++
    // update likes on the DOM
    console.log(this)
    this.likesElement.textContent = this.memeData.likes

    client.patch(`/posts/${this.memeData.id}`, {
      likes: this.memeData.likes
    })
  }

  remove = () => {
    this.card.remove()
    client.delete(`/posts/${this.memeData.id}`)
  }

  render = () => {
    // 1. Create elements that I want to add to page
    this.card = document.createElement("div");
    const imageDiv = document.createElement("div");
    const img = document.createElement("img");
    const newH4 = document.createElement("h4");
    const deleteButton = document.createElement("button");

    const likeButton = document.createElement("button");
    this.likesElement = document.createElement("p");

    // 2. Add the attributes and properties that we want the elements to have
    this.card.classList.add("post");
    imageDiv.classList.add("image");

    newH4.classList.add("description");
    newH4.textContent = this.memeData.description;

    img.src = this.memeData.meme;

    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";
    deleteButton.dataset.id = this.memeData.id;

    deleteButton.addEventListener("click", this.remove)

    likeButton.classList.add("likes-button");
    likeButton.dataset.buttonType = "upvote";
    likeButton.textContent = "👍";
    likeButton.dataset.id = this.memeData.id;

    likeButton.addEventListener("click", this.updateLikes)

    this.likesElement.textContent = this.memeData.likes;
    this.likesElement.classList.add("likes-count");

    // 3. Find where on the page we want to append these elements to, and add them in the appropriate order
    const listings = document.querySelector("#listings");
    imageDiv.append(img, deleteButton);
    this.card.append(imageDiv, newH4, this.likesElement, likeButton);
    listings.append(this.card);
  }
}

// const memeCard = new MemeCard(memeData)
// memeCard.render(parentElement)