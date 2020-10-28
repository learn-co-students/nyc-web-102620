require 'pry'


class User
    attr_reader :home_state
    attr_accessor :age, :name, :ssn, :views #create both readers and writers for name and age 
    @@all = [] #@@ indicates a class variable 

    def initialize(name, age, home_state="NY", ssn=nil)
        @name = name 
        @age = age.to_i
        @ssn = ssn 
        @home_state = home_state
        @views = 0 # not passed in as arg b/c it can't be specified when we call .new
        @@all << self # self is the instance itself
        # binding.pry
    end

    def self.all #our first class method! 
        @@all
    end

    def self.find_by_state(state)
        User.all.select { |user| user.home_state == state }
    end

    def greet
        puts "Sup y'all, I'm #{self.name}"
    end

    def age=(new_age)
        @age = new_age.to_i
    end

    def view_profile
        # puts "Your name is: #{@name}" also works!
        puts "Your name is: #{self.name}"
        puts "Your age is: #{self.age}"
        puts "Your profile has been viewed #{self.views} times"
        puts "Your ssn is: ISSA SECRET"
        increment_views # CANNOT call this with self b/c it's private
        # puts " WE'RE CALLING FRIGHTEN NOW"
        # self.frighten # b/c I have self, I can call all of these methods 
    end

    def frighten
        puts "Why would you scare me like that?!?"
        @age += 5
    end

    def is_cia_agent?
        @ssn == nil # evals to true/false and implicit returns, no need for if/else/end block
    end

    def join_cia
        @ssn = nil
        # tomorrow ... SELF!!!!
        # makes ssn nil
    end

    def steal_an_ssn(user)
        @ssn = user.ssn # set the current user's ssn to that user's ssn
        user.ssn = "0000000000" # make that user's ssn "00000"
    end

    private

    def increment_views
        self.views += 1
    end

end


# READER METHODS / GETTER METHODS ==== DO NOT WRITE b/c we use attrs to do that
# def name
#     @name 
# end

# def age
#     @age 
# end

# def ssn
#     @ssn 
# end

# WRITER METHODS / SETTER METHODS 
# def name=(new_name)
#     @name = new_name
# end