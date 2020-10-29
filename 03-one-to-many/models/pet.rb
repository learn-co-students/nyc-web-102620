class Pet

    attr_accessor :name
    attr_reader :species, :user
    @@all = []

    def initialize(name, species, user)
        @name = name
        @species = species
        @user = user
        @@all << self
    end

    def self.all
        @@all
    end

    def best_friend_name
        self.user.name
    end

    def self.all_species
        self.all.collect { |pet| pet.species }.uniq

        # self.all.collect do |pet|
        #     pet.species
        # end.uniq
    end

end # Pet class 




# Pet.new("Pumpkin", "snake", connor )