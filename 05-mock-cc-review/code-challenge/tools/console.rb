require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


# Put your variables here~!
# PASSENGER INSTANCES
aaron = Passenger.new("aaron")
jason = Passenger.new("jason")
ben = Passenger.new("ben")

# DRIVER INSTANCES
benMC = Driver.new("benMC")
amelia = Driver.new("amelia")
connor = Driver.new("connor")
vik = Driver.new("vik")

# RIDE INSTANCES
r1 = Ride.new(benMC, ben, 40.5)
r2 = Ride.new(amelia, aaron, 47.23)
r3 = Ride.new(amelia, jason, 10)
r4 = Ride.new(amelia, ben, 1)
r5 = Ride.new(amelia, jason, 11110)

# aaron 47
# ben ~41.5
# jason 11120




# Passenger.all.count
# jason.name
# jason.name = "joey" fails!!!

binding.pry
