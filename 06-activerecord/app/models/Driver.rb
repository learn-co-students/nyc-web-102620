class Driver < ActiveRecord::Base
    has_many :rides # always plural!!! 
    has_many :passengers, through: :rides

    def average_distance
        # self 
        # count
        # sum or map
        self.rides.sum { |r| r.distance } / self.rides.count
    end

    # CRUD

    # CREATE
    # Driver.new -> create Ruby instance
    # Driver.save -> save Ruby instance in database
    # Driver.create -> new + save



    # READ
    # Driver.all -> get all instances from DB
    # Driver.first/second/third/last -> get nth item from table
    # Driver.find(id) -> get the instance with the specified id
    # Driver.find_by({}) -> get instance with the specified attributes
    # Driver.where() -> get an array of instances who meet a certain criteria
        # ex we used where:
            # Driver.where(age: 100)
            # Driver.where("age > ?", 15)




    # UPDATE
    # Driver#save -> saves updated instance to database
    # Driver#update({}) -> update the specified attributes
    # Driver.update -> updates all the instances



    # DELETE
    # Driver#destroy -> deletes instance
    # Driver.destroy_all -> deletes everything from the table



end