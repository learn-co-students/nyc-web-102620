/****************** DOM Elements ******************/
const listings = document.querySelector("#listings");

/******************* Render Helpers  ******************/
function renderOneMeme(postObject) {
  // 1. Create elements that I want to add to page
  const postDiv = document.createElement("div");
  const imageDiv = document.createElement("div");
  const img = document.createElement("img");
  const newH4 = document.createElement("h4");
  const deleteButton = document.createElement("button");

  const likeButton = document.createElement("button");
  const numOfLikesPtag = document.createElement("p");

  // 2. Add the attributes and properties that we want the elements to have
  postDiv.classList.add("post");
  imageDiv.classList.add("image");

  newH4.classList.add("description");
  newH4.textContent = postObject.description;

  img.src = postObject.meme;

  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "X";
  deleteButton.dataset.id = postObject.id;

  likeButton.classList.add("likes-button");
  likeButton.dataset.buttonType = "upvote";
  likeButton.textContent = "👍";
  likeButton.dataset.id = postObject.id;

  numOfLikesPtag.textContent = postObject.likes;
  numOfLikesPtag.classList.add("likes-count");

  // 3. Find where on the page we want to append these elements to, and add them in the appropriate order
  const listings = document.querySelector("#listings");
  imageDiv.append(img, deleteButton);
  postDiv.append(imageDiv, newH4, numOfLikesPtag, likeButton);
  listings.append(postDiv);
}

/******************* Initial Render  ******************/
function initialize() {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((memePostsArray) => {
      memePostsArray.forEach((memePostObject) => {
        renderOneMeme(memePostObject);
      });
    });
}

initialize();
