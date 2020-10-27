require 'pry' #goes to rubygems, finds the gem, and gives us access to that code
require_relative './app/models/user'

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

def run
    puts "Please Sign Up to use the ______ App!"
    puts "What is your name?"
    name = gets.chomp
    puts "What is your age?"
    age = gets.chomp
    # puts "What is your ssn?"
    # ssn = gets.chomp

    new_user = User.new(name, age) # makes age a #
        # create the new user instance with the info
        # stores that new instance into the new_user variable
    binding.pry 
end


aaron = User.new("Aaron", 47, "01234")
joshua = User.new("Joshua", 47, "01234")
sara = User.new("Sara", 47)



binding.pry ## TODO, SHOW BEING IN NESTED PRYS
# run ## invoke/call/run the method, like actually saying the word 