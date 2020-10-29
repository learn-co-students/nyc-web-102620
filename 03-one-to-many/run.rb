require 'pry'
require_relative 'models/animal.rb'
require_relative 'models/user.rb'

# name, age, bio, home_state
u1 = User.new("Michelle", 25, "Raffy! 🐶", "NY")
u2 = User.new("Caryn", 45, "MOJO 💗")
aaron = User.new("Aaron", 47, "I love animals! 🦢🐘🦧🦨🦩🦮🐕‍🦺🦡🦞🦚", "NJ")
joshua = User.new("Joshua", 21, "Cats 4 Lyfe 😺", "GA")
sara = User.new("Sara", 33, "wOof! 🗣", "ME")
connor = User.new("Connor", 61, "AlL tHe pEts pLz 🥺")


a1 = Animal.new

binding.pry