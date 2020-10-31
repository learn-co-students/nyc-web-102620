class Driver

    @@all = []

    def initialize(name, age, years_driving)
        @name = name
        @age = age
        @years_driving = years_driving
        Driver.all << self
    end
    
    def self.all
        @@all
    end

    def rides
        Ride.all.select {|ride| ride.driver == self}
    end

    def passengers
        self.rides.map {|ride| ride.passenger}
    end

end # Driver class