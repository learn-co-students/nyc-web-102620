// What is the spread operator and why would I want to use it?
// Importance in Phase 4: 🔥🔥🔥🔥🔥

  // Application: Don't mutate state 
    // (Whenever you change state, chances are, spread operator is just around the corner)

  const pandemicEric = {
    name: "Eric",
    djName: "Grandmaster Slamma Jamma",
    showering: false,
    eating: ["junk", "garbage"],
    shopping: "A lot"
  }

  const regularStandardsOfLiving = {
    showering: true,
    eating: ["healthy", "clean"],
    shopping: "Somewhat"
  }

  const newEric2021 = {
    ... pandemicEric,
    ... regularStandardsOfLiving,
    shopping: "A lot a lot",
  }






// Could I do it to an array?
  // Importance in Phase 4: 🔥🔥🔥🔥🔥

const bodyParts = ["head", "shoulders", "knees", "toes"];
const song = [...bodyParts, "knees", "toes", ...bodyParts]


// Could I do it to the parameters of a function?


  function canTakeFourArguments(arg1, arg2, arg3, arg4) {
    console.log(arg1, arg2, arg3, arg4)
  }


canTakeFourArguments("head", "shoulders", "knees", "toes")
canTakeFourArguments(...bodyParts)