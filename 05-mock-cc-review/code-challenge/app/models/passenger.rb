class Passenger
    attr_reader :name
    @@all = []

    def initialize(name)
        @name = name
        @@all << self
        # THE BELOW REQUIRES YOU DEFINED Passenger.all
        # Passenger.all << self
        # self.class.all << self  #self is the instance
    end

    def self.all
        @@all 
    end

    def rides
        Ride.all.select { |ride| ride.passenger == self  }
    end

    def drivers
        self.rides.map { |ride| ride.driver }
    end

    def total_distance
        # total_dis = 0.0
        # self.rides.each do |ride|
        #     total_dis += ride.distance
        # end
        # total_dis
        self.rides.sum { |ride| ride.distance }.round(2)
        # self.rides.map { |ride| ride.distance }.sum.round(2)
        # EASTEREGG ---- do this all in one go but with reduce 
        # 1.52935892482.round(2) ===> 1.53
    end

    def self.premium_members
        # Passenger.all
        # select
        # Passenger#total_distance 
        Passenger.all.select { |passenger| passenger.total_distance > 100 }
    end
end