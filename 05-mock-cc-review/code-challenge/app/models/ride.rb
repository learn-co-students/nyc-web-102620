class Ride
    attr_reader :driver, :passenger, :distance # attr_accessor?
    @@all = []

    def initialize(driver, passenger, distance)
        @driver = driver
        @passenger = passenger
        @distance = distance.to_f
        self.class.all << self
    end

    def self.all
        @@all
    end

    def self.average_distance
        # .sum and .count
        # Ride#distance
        # Ride.all
        avg_rides = Ride.all.map { |ride| ride.distance }
        avg_rides.sum / avg_rides.count # or .size 
        # OPTION 2 
        # (self.all.sum { |ride| ride.distance} / self.all.count).round(2)
    end
end

