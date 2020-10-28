# {name: "Flower", species: "turtle", sound: "gurgles"},

# # 1. Initialize  -- Ben
# # 2. Attrs and getter/setter methods -- Julio
# # 3. Animal.all and related needs -- Connor
# 4. Animal speak method "__name__ says __sound__ "
# 5.

class Animal
    attr_reader :species
    attr_accessor :name, :sound, :happiness # planning to probably be able to change all of these 
    @@all = []

    def initialize(name, species, sound)
        @name = name
        @species = species
        @sound = sound
        @happiness = 5 # limits!  HINT HERE: ternary if cat start at 0 
        # PLAYGROUND TIME!! in_zoo instance variable 
        @@all << self
    end # initialize

    def self.all
        @@all
    end

    def speak
        # if cat and happy, purrrrr
        if self.happiness > 5 && self.species == "cat"
            puts "purrrrrrrrr"
        else 
            puts "#{self.name} speaks #{self.sound}"
        end
    end # speak method
end # class 