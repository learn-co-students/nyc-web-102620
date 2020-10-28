require 'pry' #goes to rubygems, finds the gem, and gives us access to that code
require_relative './app/models/user'
require_relative './app/models/animal'

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
    
]

animals_array.each do |animal|
    Animal.new(animal[:name], animal[:species], animal[:sound])
end

brownie = Animal.new("Brownie","bunny","Chomp")
hoppy = Animal.new("hoppy","bunny","Chomp")
stinky = Animal.new("stinky","cat","meooooowwwww")


aaron = User.new("Aaron", 47, "NJ", "01234")
joshua = User.new("Joshua", 47, "GA", "01234")
sara = User.new("Sara", 47)
connor = User.new("Connor", 47)



def run
    puts "Welcome to The ______ App!"
    puts "Please select an option"
    puts "1. Sign Up"
    puts "2. Log In"
    choice = gets.chomp
    if choice == "1"
        puts "What is your name?"
        name = gets.chomp
        puts "What is your age?"
        age = gets.chomp
        new_user = User.new(name, age) # makes age a #
        # create the new user instance with the info
        # stores that new instance into the new_user variable
    elsif choice == "2"
        puts "What's your name?"
        login_name = gets.chomp
        found_user = User.all.select { |user| user.name == login_name } # get me an array of all users 
        # How do we get a user to log in? 
        binding.pry 
    end
end




binding.pry ## TODO, SHOW BEING IN NESTED PRYS
# run ## invoke/call/run the method, like actually saying the word 