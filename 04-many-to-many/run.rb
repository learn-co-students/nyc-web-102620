require 'pry'
require_relative 'models/ride'
require_relative 'models/passenger'
require_relative 'models/driver'

# name, age
anber = Passenger.new("Anber", 54)
ekene = Passenger.new("Ekene", 32)
amelia = Passenger.new("Amelia", 47)
jc = Passenger.new("JC", 82)
kelsea = Passenger.new("Kelsea", 26)
beksultan = Passenger.new("Beksultan", 33)
shannon = Passenger.new("Shannon", 31)

# name, age, years_driving
michelle = Driver.new("Michelle", 25, 5)
ben = Driver.new("Ben", 24, 4)
chelsey = Driver.new("Chelsey", 75, 1)
adam = Driver.new("Adam", 58, 3)
melissa = Driver.new("Melissa", 62, 8)
thomas = Driver.new("Thomas", 52, 10)

# pickup, destination, driver, passenger
r1 = Ride.new("middle of nowhere", "over there", michelle, anber)
r2 = Ride.new("Brooklyn","Manhattan", ben, shannon)
r3 = Ride.new("earth", "mars", adam, ekene)
r4 = Ride.new("mars","funkytown", thomas, ekene)
r5 = Ride.new("paris","berlin", melissa, kelsea)
r6 = Ride.new("ny","tokyo", michelle, jc)





binding.pry