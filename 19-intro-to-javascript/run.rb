require 'pry'

raffy = {name: "Raffy", age: 9}
puts raffy[:name]

arr = [1,2,3,4]

def is_it_even(arr_argument)
  if arr_argument.length.even?
    puts "It is even."
  else
    puts "It is odd."
  end
end

is_it_even(arr)

arr.each do |num|
    puts num * 2
end

binding.pry
