
class Driver
    attr_reader :name # might need accessor later?
    @@all = []

    def initialize(name)
        @name = name
        @@all << self
        # THE BELOW REQUIRES YOU DEFINED Passenger.all
        # Driver.all << self
        # self.class.all << self  #self is the instance
    end

    def self.all
        @@all 
    end

    def rides
        Ride.all.select { |ride| ride.driver == self }
    end

    def passenger_names
        self.rides.map { |ride| ride.passenger.name }.uniq
    end

    def total_distance
        self.rides.sum { |ride| ride.distance }.round(2)
    end

    def self.mileage_cap(distance)
        # if the driver has driven a total distance greater than distance
        # Driver#total_distance helper
        # Ride.all
        # Driver.all 
        Driver.all.select { |driver| driver.total_distance > distance }
    end
end