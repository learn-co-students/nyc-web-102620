class Ride < ActiveRecord::Base
    belongs_to :driver # always singular! 
    belongs_to :passenger
end