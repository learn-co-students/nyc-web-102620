class Passenger

    @@all = []

    def initialize(name, age)
        @name = name
        @age = age
        Passenger.all << self
    end

    def self.all
        @@all
    end

    def rides
        Ride.all.select {|ride| ride.passenger == self}
    end

    def drivers
        self.rides.map {|ride| ride.driver}
        # self.rides.map(&:driver)
    end

end # Passenger class