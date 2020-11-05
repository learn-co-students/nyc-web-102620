Driver.destroy_all


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
d3 =Driver.last