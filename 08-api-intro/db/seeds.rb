require 'pry'

Category.destroy_all
User.destroy_all
Game.destroy_all

# AI: Seed with 100 categories from the API 

User.create(username: "Caryn", password: "12345")
