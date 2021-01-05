# Practical Object Oriented JavaScript

So far, we've been writing our code _procedurally_: we group together code into functions, and put together our applications by having one function call another function and run whatever code is inside.

Object Oriented design patterns give us another way to organize our code. We can start constructing "things" in our applications as Objects: the encapsulation of data (state) and behavior (functions) into meaningful objects.

There is going to be a lot happening under the hood that we won't go into too much detail on immediately, but that content will be covered in later videos. Just like you can learn to drive a car without being a mechanic, you can get some benefit out of writing OOJS without understanding what is happening under the hood.

The under the hood stuff _will_ be important though, so pay attention particularly to the `this` keyword, and any mention of the word "prototype" as particular areas of interest - those topics will be covered in much more detail in future videos. Learning those concepts will **vastly** improve your debugging skills, and your hireability - they are _super_ common topics for technical interviews about Javascript.

## Class Syntax Basics

Let's start by writing out a class in Ruby, that doesn't involve Active Record. Back to basics!

```rb
class Dog

  attr_accessor :first_name, :fav_snacks

  def initialize(first_name, fav_snacks)
    @first_name = first_name
    @fav_snacks = fav_snacks
  end

end

fezzik = Dog.new("Fezzik", ["Peanut Butter", "Soccer Balls"])
lucy = Dog.new("Lucy", ["Dog Treats", "Turkey Sandwiches"])
puts fezzik.first_name
```

Recall a few things:

- the `class` keyword lets us group together functionality and define a _blueprint_ for creating objects with the same structure
- the `initialize` will run any time we create a new _instance_ of the class, by calling `Dog.new`; this is where we pass in the _data_ (the _initial state_) of our objects
- by using an _instance variable_ like `@first_name` with an `attr_accessor` method, we can access the data saved to that instance

The equivalent code for this in Javascript looks like this:

```js
class Dog {
  constructor(firstName, favSnacks) {
    this.firstName = firstName;
    this.favSnacks = favSnacks;
  }
}

const fezzik = new Dog("Fezzik", ["Peanut Butter", "Soccer Balls"]);
const lucy = new Dog("Lucy", ["Dog Treats", "Turkey Sandwiches"]);

console.log(fezzik.firstName);
```

Note a few key differences here:

- `constructor` takes the place of `initialize`, and we create new instances by calling `new Dog` instead of `Dog.new`
- there are no instance variables in our class; instead, when we run `constructor`, Javascript creates an _object_ and assigns that object to the `this` keyword in our `constructor` method
- the `constructor` returns the object (`this`) that was created, and we can access properties assigned to that object directly (no need for the `attr_accessor`)

Let's expand our classes and add an _instance method_:

```rb
def say_name
  puts "woof my name is #{self.first_name}"
end

fezzik.say_name
```

In JS:

```js
sayName() {
  console.log(`woof my name is ${this.firstName}`)
}

fezzik.sayName()
```

In both methods, we can access the _data_ about the instance using a special keyword: in Ruby, we use `self`; in Javascript we use `this`.

**IMPORTANT NOTE**: they don't behave exactly the same! For a quick example, what if I did this:

```js
const sayNameFn = fezzik.sayName;

sayNameFn(); // `woof my name is undefined`
```

There's no way of writing this equivalent code in Ruby; I assign a reference to a function in Ruby like I can in Javascript. You'll learn more about what's happening in the example with the `this` keyword later - just planting the seed for now.

**ANOTHER NOTE**: we can inspect a `Dog` instance to see how it's able to use the `sayName` method in the DevTools; this will show us the `__proto__` and how it's linked to the class. More on that in the Prototypal Inheritance section!

To show some other syntax, let's add a class variable and class method as well:

```rb
class Dog
  attr_accessor :first_name, :fav_snacks

  @@all = []

  def initialize(first_name, fav_snacks)
    @first_name = first_name
    @fav_snacks = fav_snacks
    @@all << self
  end

  def say_name
    puts "woof my name is #{self.first_name}"
  end

  def self.all
    @@all
  end

  def self.find_by_name(first_name)
    Dog.all.find do |dog_instance|
      dog_instance.first_name == first_name
    end
  end

end

p Dog.all
p Dog.find_by_name("Lucy")
```

Remember from Ruby:

- `@@all` is a _class variable_, which is a variable that's available inside instance methods _and_ class methods
- `self.all` and `self.find_by_name` are _class methods_, which are methods we can call on the class (rather than the instance); they're used for functionality that isn't related to one specific instance, but for the class as a whole

In Javascript, we could write it like this:

```js
class Dog {
  constructor(firstName, favSnacks) {
    this.firstName = firstName;
    this.favSnacks = favSnacks;
    Dog.all.push(this);
  }

  sayName() {
    console.log(`woof my name is ${this.firstName}`);
  }
}

Dog.all = [];
Dog.findByName = function (firstName) {
  return Dog.all.find((dogInstance) => dogInstance.firstName === firstName);
};

console.log(Dog.all);
const dog = Dog.findByName("Lucy");
console.log(dog);
```

Recently, Javascript added support for the `static` keyword, which will let us write that functionality within the class:

```js
class Dog {
  static all = [];

  constructor(firstName, favSnacks) {
    this.firstName = firstName;
    this.favSnacks = favSnacks;
    Dog.all << this;
  }

  sayName() {
    console.log(`woof my name is ${this.firstName}`);
  }

  static findByName(name) {
    // remember the `return` keyword!
    return Dog.all.find((dogInstance) => dogInstance.firstName === firstName);
  }
}
```

In both cases, we're just attaching new properties to the Dog class (the Dog object); the `static` keyword is just _syntactic sugar_ for the previous version.

## Inheritance

We can also do inheritance in Javascript, just like we could in Ruby; remember, if we have several classes that share the same functionality, we can DRY up our code with inheritance:

```rb
class Animal
  attr_accessor :first_name

  def initialize(first_name)
    @first_name = first_name
  end

  def say_name
    puts "my name is #{self.first_name}"
  end

end


class Dog < Animal
  attr_accessor :fav_snacks

  def initialize(first_name, fav_snacks)
    super(first_name)
    @fav_snacks = fav_snacks
  end
end

class Cat < Animal
  attr_accessor :num_lives

  def initialize(first_name)
    super(first_name)
    @num_lives = 9
  end
end

```

A couple things to note here:

- `Cat` and `Dog` inherit from `Animal`, so any instance methods on the `Animal` class can also be used on `Cat` and `Dog` instances
- calling `super` from a child class will call that same method on the parent class; so `super(first_name)` from the `Cat#initialize` method will call the `Animal#initialize` method

Here's the Javascript equivalent:

```js
class Animal {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayName() {
    console.log(`my name is ${this.firstName}`);
  }
}

class Dog extends Animal {
  constructor(firstName, favSnacks) {
    super(firstName);
    this.favSnacks = favSnacks;
  }
}

class Cat extends Animal {
  constructor(firstName) {
    super(firstName);
    this.numLives = numLives;
  }
}
```

We use `extends` to define the class we're inheriting from instead of the `<` sign. We can still use the `super` keyword in the same way as Ruby to call on methods of the same name in the parent class.

Hopefully now you have seen enough syntax to spark some curiosity and see how we can take advantage of Object Oriented Programming to organize our code. Now let's see some practical examples!

## OOJS with DOM Manipulation

Let's see some examples of how we can combine our understanding of event handling and DOM manipulation to design a class and take advantage of OOP.

The approach we're going to be taking to writing OOJS will be to create a class representing a `AnimalComponent` for displaying information about each animal on the page.

There are many ways to leverage OOJS to organize our code, but this approach should be helpful to start thinking like a React developer and get you in a good mindset for Phase 4! The code we're writing isn't going to be exactly the same as you'll see next phase, but some of the design decisions will be similar.

The responsibilities of our `AnimalComponent` class will be:

- Keep track of the data associated with a animal
- Render the animal to the DOM
- Handle any events associated with the animal

The markup for our component looks like this:

```html
<li class="card">
  <div class="image">
    <img src="{animal image}" alt="{animal name}" />
    <button class="button delete-button" data-action="delete">X</button>
  </div>
  <div class="content">
    <h4>{animal name}</h4>
    <div class="donations">
      $<span class="donation-count">{animal donations}</span> Donated
    </div>
    <p class="description">{animal descriptions}</p>
  </div>
  <button class="button donate-button" data-action="donate">Donate $10</button>
</li>
```

We want to set up our class to work like this:

```js
// animalData is an array of animal objects
animalData.forEach((animalObject) => {
  // create an instance of the component, passing in the data about each animal to it
  const animalComponent = new AnimalComponent(animalObject);

  // render the animal component inside some parent element on the DOM
  animalComponent.render(animalContainer);
});
```

Here are the general steps:

- Create a file for our class and add a `<script>` tag linking to that file
- Create a class and a constructor method that takes in the animal object, so we can save some _data_/_state_ to our instance
- Create a render method that's responsible for displaying the animal component, and adding it to the DOM
- Add event listeners to any events associated with the component
