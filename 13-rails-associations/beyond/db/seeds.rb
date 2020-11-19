# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying your planetz!! 🪐"

Planet.destroy_all

puts "Creating your planetz!! 🌍"

Planet.create!(name: "Earth", size: 1000)
Planet.create!(name: "Mars", size: 750)
Planet.create!(name: "Dagobah", size: 2000)
Planet.create!(name: "Tatoine", size: 1500)
Planet.create!(name: "Coruscant", size: 5000)