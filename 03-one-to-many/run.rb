require 'pry'
require_relative 'models/pet.rb'
require_relative 'models/user.rb'

# name, age, bio, home_state
michelle = User.new("Michelle", 25, "Raffy! 🐶", "NY")
caryn = User.new("Caryn", 45, "MOJO 💗")
ethan = User.new("Ethan", 49, "Pets are the best! 🥰")
aaron = User.new("Aaron", 47, "I love animals! 🦢🐘🦧🦨🦩🦮🐕‍🦺🦡🦞🦚", "NJ")
joshua = User.new("Joshua", 20, "Cats 4 Lyfe 😺", "GA")
sara = User.new("Sara", 33, "wOof! 🗣", "ME")
connor = User.new("Connor", 67, "AlL tHe pEts pLz 🥺")


a1 = Pet.new("Pumpkin", "snake", connor )
a2 = Pet.new("Drake", "doggo", ethan )
a3 = Pet.new("Jewls", "cat", joshua )
a4 = Pet.new("Meowgli", "bear", sara )
a5 = Pet.new("Kobe", "cat", connor )
a6 = Pet.new("Momba", "snake", connor )
a7 = Pet.new("Snoopy", "doggo", connor )
a8 = Pet.new("Mickey", "mouse", connor )

binding.pry