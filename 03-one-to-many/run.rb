require 'pry'
require_relative 'models/animal.rb'
require_relative 'models/user.rb'

# name, age, bio, home_state
michelle = User.new("Michelle", 25, "Raffy! 🐶", "NY")
caryn = User.new("Caryn", 45, "MOJO 💗")
ethan = User.new("Ethan", 49, "Pets are the best! 🥰")
aaron = User.new("Aaron", 47, "I love animals! 🦢🐘🦧🦨🦩🦮🐕‍🦺🦡🦞🦚", "NJ")
joshua = User.new("Joshua", 20, "Cats 4 Lyfe 😺", "GA")
sara = User.new("Sara", 33, "wOof! 🗣", "ME")
connor = User.new("Connor", 67, "AlL tHe pEts pLz 🥺")


a1 = Animal.new

binding.pry