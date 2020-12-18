document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joke-form");
  const jokeList = document.getElementById("joke-list");
  const username = document.getElementById("name-input")
  let joke;

  function renderJoke(joke) {
    debugger
    const newJokeLi = document.createElement("li");
    newJokeLi.innerHTML = `
    <span class="username">${username.value} says:</span> ${joke}
    `;
    jokeList.appendChild(newJokeLi);
  }

  function fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((jokeData) => {
        renderJoke(jokeData.joke)
      });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (username.value === "") return;

    fetchJoke();
  });
});


// go through line by line, read for typos
// look at the fetchJoke function to see what that does
// line 15 looks sus
// look at the addEventListener for the form
