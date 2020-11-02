# BetterLyft™ 

## Questions / Sticking points 
- ... none for now! 
- Ben S - so this wasn't part of today's practice challenge, but at the end if you have a sec could I ask you a question or two about joiner classes?
- Vik - When we should be using a joiner class?. Just a side question. And will we have to for tmw?
- Josh - If there’s time, could we possibly talk through Bakery and identifying where the joiner class would be needed??
- the two main versions of many to many you should be prepared for 
- If you only use .each the whole way through... yep go use more appropriate ones before submitting
- Enums youll want to know exist... find(&equivalents), sum, uniq, max_by, min_by, reduce(*** nice but not need to know)

## Deliverables
You are building an app for a Lyft/Uber competitor. The models that you will use for your application are: Passenger, Driver, and Ride.

## Domain Modeling
  - A Passenger has many rides
  - A Driver has many rides
  - A Ride belongs to a passenger and a driver
  
Always start by drawing out the relationship either on a whiteboard or piece of paper. Think about how each of these models will be connected. From there then begin writing code.

## Deliverables

We'd like for you build out the following methods for each class. As you work, we want to make sure we are testing our code every step of the way. We've made a file for you to test out your methods. Make sure you `bundle install` first. Then, you can run the command `ruby tools/console.rb` and it will run that file, along with all of the variables or actions you declare in the `tools/console.rb`.

#### Passenger
<!-- A Passenger should be initialized with a name as a string. After the Passenger has been initialized, it shouldn't be changed. -->
<!-- - `Passenger#name`
  - Returns the name of the passenger -->
<!-- - `Passenger#rides`
  - Returns an array of Ride instances that this person has been on -->
<!-- - `Passenger#drivers`
  - Returns an array of Driver instances that this person has rode with -->
<!-- - `Passenger#total_distance`
  - Returns the floating number that represents the total distance the passenger has travelled using the service -->
<!-- - `Passenger.all`
  - Returns an array of all Passengers -->
<!-- - `Passenger.premium_members`
  - Returns an array of all Passengers who have travelled over 100 miles in total with the service -->

#### Ride
<!-- A Ride should be initialized with a driver (as a Driver object), a passenger (as a Passenger object), and a distance (as a float i.e. `3.2`). The distance refers to miles. -->
<!-- - `Ride#passenger`
  - Returns the Passenger object for that ride -->
<!-- - `Ride#driver`
  - Returns the Driver object for that ride -->
<!-- - `Ride#distance`
  - Returns the distance of the ride -->
<!-- - `Ride.average_distance`
  - Returns the average distance across ALL rides -->
  
#### Driver
<!-- A Driver should be initialized with a name as a string. -->
<!-- - `Driver#name`
  - Returns the driver's name -->
<!-- - `Driver#passenger_names`
  - Returns an array of all Passengers' names a driver has driven. The names should be **unique** (no repeats). -->
<!-- - `Driver#rides`
  - Returns an array of all Rides a driver has made -->
<!-- - `Driver.all`
  - Returns an array of all Drivers -->
<!-- - `Driver.mileage_cap(distance)`
  - Takes an argument of a distance (float) and returns an array of all Drivers who have driven over the mileage -->

