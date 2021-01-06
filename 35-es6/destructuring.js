// What is destructuring and why would I want to do it?

  // POJO -> Variables
  // Importance in Phase 4: 🔥🔥🔥🔥
    // Application: Destructuring your state and props

  const phase3 = {
    name: "NYC Web 102620",
    population: 34,
    founded: 102620,
    languages_mastered: ["Ruby", "Rails", "Javascript"],
  }

  // const name = phase3.name;
  // const population = phase3.population;
  // const founded = phase3.founded;
  const {name, population, founded} = phase3

  // const languages = phase3.languages_mastered
  const {languages_mastered: languages} = phase3






// Could I do it to an array?

    // Importance in Phase 4: 🔥🔥🔥🔥
    // Application: 
     // let [state, setState] = useState(0)
      // useState(0) returns an array and we're assigning the return values to specific variables

  const boroughNames = ["Brooklyn", "Manhattan", "The Bronx", "Queens", "Staten Island"];

  // const brooklynVar = boroughNames[0]
  // const manhattanVar = boroughNames[1]

  const [brooklynVar, manhattanVar, , queensVar] = boroughNames





// Could I do it to the parameters of a function?
   // Importance in Phase 4: 🔥🔥🔥🔥
    // Application: function Component({key1, key2}){
    // }

function greet({name, djName}) {

  // const name = person.name;
  // const djName = person.djName;
  // const {name, djName} = person

  return `Hello, ${ name }! Your DJ name is ${ djName }.`
}

const me = {
  name: "Eric",
  djName: "Grandmaster Slamma Jamma",
  middleName: "Hank"
}

// console.log(greet(me));



