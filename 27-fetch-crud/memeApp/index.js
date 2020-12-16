/****************** DOM Elements ******************/
const newMemeForm = document.querySelector("form#newMemeForm");
const header = document.querySelector("#menu h1.logo");
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

  likeButton.classList.add("likes-button");
  likeButton.dataset.buttonType = "upvote";
  likeButton.textContent = "👍";
  numOfLikesPtag.textContent = postObject.likes;
  numOfLikesPtag.classList.add("likes-count");

  // 3. Find where on the page we want to append these elements to, and add them in the appropriate order
  const listings = document.querySelector("#listings");
  imageDiv.append(img, deleteButton);
  postDiv.append(imageDiv, newH4, numOfLikesPtag, likeButton);
  listings.append(postDiv);
}

function renderAllListings(memePostsArray) {
  memePostsArray.forEach((memePostObject) => {
    renderOneMeme(memePostObject);
  });
}

/******************* Event Listeners  ******************/

listings.addEventListener("click", function (event) {
  if (event.target.matches(".delete-button")) {
    // Delete Meme
    const postDiv = event.target.closest("div.post");
    postDiv.remove();
  } else if (event.target.dataset.buttonType === "upvote") {
    // Update Meme
    const postDiv = event.target.closest("div.post");
    const likesPtag = postDiv.querySelector(".likes-count");
    const numOfLikes = parseInt(likesPtag.textContent) + 1;
    likesPtag.textContent = numOfLikes;
  }
});

newMemeForm.addEventListener("submit", function (event) {
  // Create Meme
  event.preventDefault();
  const newMemeObject = {
    description: event.target.description.value,
    meme: event.target.meme.value,
    likes: 0,
  };

  renderOneMeme(newMemeObject);
  event.target.reset();
});

/******************* Initial Render  ******************/
renderAllListings(postsArray);
