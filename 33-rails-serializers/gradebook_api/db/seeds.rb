eric = Teacher.create(name: "Eric", subject: "Math")
ian = Teacher.create(name: "Ian", subject: "Chemistry")

geo = Classroom.create(name: "Geometry", teacher: eric)
numbers = Classroom.create(name: "Numbers", teacher: eric)

chem = Classroom.create(name: "Nuclear Chem 500", teacher: ian)

Assignment.create(name: "Pythagorean Theorem", classroom: geo)
Assignment.create(name: "Counting 101", classroom: numbers)

Assignment.create(name: "Fission", classroom: chem)
Assignment.create(name: "Fusion", classroom: chem)
