# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying your planetz and tripz and alienz!! 🚀👽🪐"

Trip.destroy_all
Planet.destroy_all
Alien.destroy_all

puts "Creating your planetz!! 🪐"

Planet.create!(name: "Earth", size: 1000)
Planet.create!(name: "Mars", size: 750)
Planet.create!(name: "Dagobah", size: 2000)
Planet.create!(name: "Tatoine", size: 1500)
Planet.create!(name: "Coruscant", size: 5000)


puts "Creating your alienz!! 👽"

20.times do 
  Alien.create(name: Faker::Games::WorldOfWarcraft.hero, user_name: Faker::Internet.username, age: rand(0..1000), abduction_count: rand(10..1000), color: Faker::Color.color_name)
end 

puts "Creating your tripz!! 🚀"

reasons = ["buisness", "pleasure", "abducting"]

60.times do 
  Trip.create(planet_id: Planet.all.sample.id, alien_id: Alien.all.sample.id, length: rand(1..100), reason: reasons.sample )
end 