// console.log("BEFORE fetch");

const button = document.querySelector("button");
const input = document.querySelector("input");
const nameH3 = document.querySelector("h3");

button.addEventListener("click", (event) => {
  console.log(event.target);

  const id = input.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      renderPokemon(data);
    });
});

function renderPokemon(pokemon) {
  nameH3.textContent = "Base XP: " + pokemon.base_experience;
}

// fetch("https://pokeapi.co/api/v2/pokemon/2")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("INSIDE fetch");
//     console.log(data);
//   });

// console.log("AFTER fetch");

// sleep(5); /// blocking code!

// // non blocking!
// console.log("BEFORE setTimeout");

// // asynchronous!
// setTimeout(() => {
//   console.log("INSIDE setTimeout");
// }, 0);

// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
// console.log("AFTER setTimeout");
