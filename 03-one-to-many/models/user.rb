class User
    attr_reader :name, :age
    attr_accessor :home_state, :bio
    @@all = []

    def initialize(name, age, bio, home_state="NY")
        @name = name 
        @age = age.to_i 
        @bio = bio 
        @home_state = home_state
        @@all << self
    end

    def self.all
        @@all
    end

    def adopt_pet(name, species)
        Pet.new(name, species, self)
    end

    def pets
        Pet.all.select {|pet| pet.user == self}
    end

    def number_of_pets
        self.pets.count
    end

    def self.super_friends(state)
        User.find_by_state(state).select {|user| user.number_of_pets > 3}
    end

    def self.find_by_state(state)
        User.all.select { |user| user.home_state == state }
    end

end # User class