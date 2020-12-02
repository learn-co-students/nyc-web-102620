# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying your planetz and tripz and alienz!! 🚀👽🌎"

Trip.destroy_all
Planet.destroy_all
Alien.destroy_all

puts "Creating your planetz!! 🌎"

planet_images = [
  "https://nineplanets.org/wp-content/uploads/2019/09/mercury.png",
  "https://www.planet.com/assets/images/company/company-globe.png",
  "https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png",
  "https://nineplanets.org/wp-content/uploads/2019/09/pluto-1.png",
  "https://nineplanets.org/wp-content/uploads/2019/09/neptune.png",
  "https://nineplanets.org/wp-content/uploads/2019/09/mars.png",
  "https://nineplanets.org/wp-content/uploads/2019/09/saturn.png",
  "https://theplanets.org/wp-content/uploads/2014/09/venus.png",
  "https://webstockreview.net/images/mars-clipart-red-planet-3.png"
]


15.times do 
  Planet.create(name: Faker::Space.planet, galaxy: Faker::Space.galaxy, img_url: planet_images.sample)
end 


puts "Creating your alienz!! 👽"

20.times do 
  Alien.create(name: Faker::Games::WorldOfWarcraft.hero, user_name: Faker::Internet.username, img_url: "https://robohash.org/#{Faker::Hipster.word}.png/?set=set2", age: rand(0..1000), abduction_count: rand(10..1000))
end 

puts "Creating your tripz!! 🚀"

reasons = ["buisness", "pleasure", "abducting"]

60.times do 
  Trip.create(planet_id: Planet.all.sample.id, alien_id: Alien.all.sample.id, length: rand(1..100), reason: reasons.sample )
end 