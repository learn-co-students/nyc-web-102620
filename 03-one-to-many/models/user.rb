class User

    attr_accessor :home_state
    @@all = []

    def initialize(name, age, bio, home_state="NY")
        @name = name 
        @age = age 
        @bio = bio 
        @home_state = home_state
        @@all << self
    end

    def self.all 
        @@all
    end

    def self.find_by_state(state)
        User.all.select { |user| user.home_state == state }
    end

end # User class