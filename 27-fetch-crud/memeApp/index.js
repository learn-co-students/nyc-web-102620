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

function renderAllListings(memePostsArray) {
  memePostsArray.forEach((memePostObject) => {
    renderOneMeme(memePostObject);
  });
}

/******************* Event Listeners  ******************/
// Event Delegation
listings.addEventListener("click", function (event) {
  if (event.target.matches(".delete-button")) {
    // Delete Meme
    // when the delete button is clicked

    // make a DELETE /posts/10 fetch request
    const id = event.target.dataset.id;
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   // pessimistic rendering (not lying to your users)
    //   const postDiv = event.target.closest("div.post");
    //   postDiv.remove();
    // });

    // optimistic rendering (maybe lying to your users)
    const postDiv = event.target.closest("div.post");
    postDiv.remove();
  } else if (event.target.dataset.buttonType === "upvote") {
    // Update Meme
    // when the update button is clicked

    // make PATCH /posts/100 fetch request
    const postDiv = event.target.closest("div.post");
    const likesPtag = postDiv.querySelector(".likes-count");
    const numOfLikes = parseInt(likesPtag.textContent) + 1;

    const id = event.target.dataset.id;

    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: numOfLikes,
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        console.log(updatedPost);
        // pessimists!
        likesPtag.textContent = updatedPost.likes;
      });

    // and update the likes on the DOM
    // optimists!
    // likesPtag.textContent = numOfLikes;
  }
});

// When the form submit event happens...
newMemeForm.addEventListener("submit", function (event) {
  // Create Meme
  event.preventDefault();

  const newMemeObject = {
    description: event.target.description.value,
    meme: event.target.meme.value,
    likes: 0,
  };

  // make a POST /posts request
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMemeObject),
  })
    .then((response) => response.json())
    .then((actualNewMemeFromTheServer) => {
      console.log("Success:", actualNewMemeFromTheServer);
      // and slap the new post on the DOM
      renderOneMeme(actualNewMemeFromTheServer);
    });

  console.log(newMemeObject);
  // renderOneMeme(newMemeObject);

  event.target.reset();
});

/******************* Initial Render  ******************/

// Do (GET /posts) Fetch Request...
fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((postsArray) => {
    console.log(postsArray);
    // And Slap (our array of posts) On the DOM
    renderAllListings(postsArray);
  });
