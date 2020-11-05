Driver.destroy_all
Passenger.destroy_all
Ride.destroy_all
# 1. Dummy data 
# 2. Starter data for your application 

# one way to create an instances
vik = Driver.create(name: "Vik", age: 60, experience: 450, points: 0, car: "berlinetta")

# another way to create instances
Driver.create([
    {name: "Pedro IV", age: 70, experience: 20, points: 6, car: "red rivian"},
    {name: "Raffy", age: 10, experience: 100, points: 0, car: "mustang"},
    {name: "Jason", age: 43, experience: 999999, points: 4, car: "bmw"},
    {name: "Julio", age: 29, experience: 200, points: 0, car: "tesla"},
    {name: "Serkan", age: 39, experience: 400, points: 1, car: "ferrari"},
    {name: "Amelia", age: 49, experience: 200, points: 0, car: "Mercedes-Benz"},
    {name: "Shannon", age: 59, experience: 200, points: 0, car: "tesla"},
    {name: "Kelsea", age: 19, experience: 50, points: 3, car: "bmw"},
    {name: "Tommy", age: 25, experience: 70, points: 1, car: "mustang"}
])

d1 = Driver.first
d2 = Driver.second
d3 = Driver.last

Passenger.create([
    {name: "Sara", bio: " Pudding jelly-o soufflé candy dessert lollipop. ", rating: 4.7},
    {name: "Anber", bio: "Pudding tiramisu lemon drops cake bonbon.", rating: 4.95},
    {name: "Anthony", bio: "Wafer tart jujubes fruitcake ice cream carrot cake cookie tiramisu.", rating: 3.2},
    {name: "JC", bio: "Pudding tiramisu lemon", rating: 2.9}, 
    {name: "Serkan", bio: "Wafer tart jujubes fruitcake ice cream carrot cake cookie tiramisu.", rating: 2.5}
])

p1 = Passenger.first
p2 = Passenger.second
p3 = Passenger.third
p4 = Passenger.fourth
p5 = Passenger.fifth



Ride.create([
    {driver_id: d1.id, passenger_id: Passenger.first.id, cost: 100.0, distance: 1.0 }, # use ids / the column name
    {driver: d3 , passenger: p2, cost: 47.5, distance: 27.0 }, # use column name sans _id, just point to whole instance
    {driver: d2 , passenger: p5, cost: 25.0, distance: 3.5 },
    {driver: d3 , passenger: p5, cost: 789.2, distance: 1.89 },
    {driver: d3 , passenger: p4, cost: 11.11, distance: 47.47 }
])