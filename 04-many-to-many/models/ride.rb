class Ride

    attr_reader :driver, :passenger
    @@all = []

    def initialize(pickup, destination, driver, passenger)
        @pickup = pickup
        @destination = destination
        @driver = driver
        @passenger = passenger
        Ride.all << self
    end

    def self.all
        @@all
    end

end # Ride class