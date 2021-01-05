/****************** DOM Elements ******************/
const listings = document.querySelector("#listings");

/******************* Initial Render  ******************/
function initialize() {
  client.get("/posts")
    .then((memePostsArray) => {
      memePostsArray.forEach((memePostObject) => {
        const memeCard = new MemeCard(memePostObject)
        memeCard.render()
        // renderOneMeme(memePostObject);
      });
    });
}

initialize();
