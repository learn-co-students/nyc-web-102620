class Dog
  attr_accessor :first_name, :fav_snacks

  def initialize(first_name, fav_snacks)
    @first_name = first_name
    @fav_snacks = fav_snacks
  end

end

fezzik = Dog.new("Fezzik", ["Peanut Butter", "Soccer Balls"])
lucy = Dog.new("Lucy", ["Dog Treats", "Turkey Sandwiches"])

p fezzik