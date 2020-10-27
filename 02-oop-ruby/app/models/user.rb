require 'pry'


class User
    attr_reader :age
    attr_writer  # only ssn can only be written, others need both 
    attr_accessor :name, :ssn #create both readers and writers for name and age 

    def initialize(name, age, ssn=nil)
        @name = name 
        @age = age.to_i
        @ssn = ssn 
    end

    def greet
        puts "Sup y'all, I'm #{@name}"
    end

    def age=(new_age)
        @age = new_age.to_i
    end

    def view_profile
        puts "Your name is: #{@name}"
        puts "Your age is: #{@age}"
        puts "Your ssn is: a secret"
    end

    def frighten
        puts "Why would you scare me like that?!?"
        @age += 5
    end

    def is_cia_agent?
        @ssn == nil # evals to true/false and implicit returns
        # if 
        #     true
        # else
        #     false
        # end
    end

    def join_cia
        @ssn = nil
        # tomorrow ... SELF!!!!
        # makes ssn nil
    end

    # sara.steal_an_ssn(joshua)

    def steal_an_ssn(user)
        @ssn = user.ssn # set the current user's ssn to that user's ssn
        user.ssn = "0000000000" # make that user's ssn "00000"
    end

end


# READER METHODS / GETTER METHODS ==== do not write b/c we use attrs to do that
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