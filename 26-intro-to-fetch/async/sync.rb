

# puts("Let's get going")
# puts("But first, sleepytime")
# sleep(5)
# puts("Thanks for that nice rest")


















require 'rest-client'
require 'json'
require 'pry'

puts "Getting data from the API"
response = RestClient.get("https://pokeapi.co/api/v2/pokemon/2")
pokemon = JSON.parse(response)
puts "Your pokemon is #{pokemon["name"]}!"