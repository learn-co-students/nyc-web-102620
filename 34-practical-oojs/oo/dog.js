class Dog {

  // class variable
  static all = []

  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    Dog.all.push(this)
  }

  // instance method
  speak() {
    console.log(this)
    console.log(`Woof my name is ${this.firstName}`)
  }

  // class method
  static findByName(name) {
    return Dog.all.find(dogInstance => {
      return dogInstance.firstName === name
    })
  }
}

// Dog.all = []

// @@all
// class methods
// getters/setters

const fezzik = new Dog(
  "Fezzik", 
  ["Peanut Butter", "Soccer Balls"]
)
const lucy = new Dog(
  "Lucy", 
  ["Dog Treats", "Turkey Sandwiches"]
)

fezzik.speak()

const speak = fezzik.speak

