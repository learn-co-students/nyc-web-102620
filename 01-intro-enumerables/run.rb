require 'pry' #goes to rubygems, finds the gem, and gives us access to that code


# 1. I am building a Pets application. I need to a way to hold all the information (name, type) about a SPECIFIC pet. Which datatype should I use?
# 2. Now, I need a way to hold a list of all of the pets in my app. Which datatype should I use? 
# 3. I want a list of only the names of each pet. How do I do that? What datatype should be returned?
# 4. I want to be to find all pets that are dogs. What iterator should I use? What datatype should be returned?
# 5. I want to be able to find a single dog with a specific name. How do I do that? What datatype should be returned?



# 1. show a list of all the names of all the pets
# 2. show me a list of just the pets that are... dogs?
# 3. let me search for pet by name

# name, species, sound 
# AoH - Array of Hashes 
animals_array = [
    {name: "Flower", species: "turtle", sound: "gurgles"},
    {name: "Mojo", species: "cat", sound: "grrrrrrrr"}, 
    {name: "Cloud", species: "cat", sound: "aaaaaaaaaaaa"},
    {name: "Flower", species: "cat", sound: "meoww"},
    {name: "Riley", species: "dog", sound: "ruff"},
    {name: "Rocky", species: "cat", sound: "Gurgle"},
    {name: "JoJo", species: "cat", sound: "meow"},
    {name: "raffy", species: "dog", sound: "woof"},
    {name: "Stella", species: "dog", sound: "whine"},
    {name: "Brownie", species: "bunny", sound: "Chomp"}
]


def run(animals) ## defining the method, like adding a work to a dictionary # TODO DEFAULT ARG ERROR
    puts "Welcome to the Pet Shop!"
    puts "Would you like to..."
    puts "1. See a list of all animals' names"
    puts "2. See a list of just the dogs"
    puts "3. Search for an animal by name"

    choice = gets.chomp
    if choice == "1"
        # can do with each but map is better suited! 
        names_arr = animals.map { |animal| animal[:name] }
    elsif choice == "2"
        just_dogs = animals.filter { |animal| animal[:species] == "dog" }# or select, or find_all
    elsif choice == "3"
        puts "What animal are you looking for?"
        name = gets.chomp
        found = animals.find do |ani|
            ani[:name] == name 
        end
        # binding.pry
    else 
        puts "Please select a valid option"
        sleep(0.5) # wait for 0.5 seconds
        system('clear') # clear the terminal screen 
        run(animals)
        # optimizations
        # curlyBois notation 
        # capitalization
        # ele in pipes
    end
    
end


binding.pry ## TODO, SHOW BEING IN NESTED PRYS
# run ## invoke/call/run the method, like actually saying the word 

# STOP HERE 
# so I can try out stuff with animals_array or with run 