Intro to ActiveRecord
===

## SWBATs
- [ ] Describe how gems work and the value of shared code
- [ ] Implement ActiveRecord in their projects
- [ ] Explain how `rake` works and how to run rake tasks
- [ ] Practice creating migrations for updating the database structure
- [ ] Practice with `ActiveRecord::Base` instance and class methods
- [ ] Perform persistent CRUD actions on one model using ActiveRecord
- [ ] Practice creating models and migrations for model relationships
- [ ] Practice using AR macro's 
- [ ] Identify what methods AR writes and which the developers (us) need to write


## Questions
1. What are the steps for setting up ActiveRecord on a model? (without looking at notes!)
   Make sure your domain model works for your use cases
   Create a model (< ActiveRecord::Base)
   Create the migration
   Run the migration 
   Check schema
   Create some seeds 
   Test!!!!!!!!!
2. What things we had to write in OOP that we *do not* write in AR?
  attrs
  @@all
  Class.all 
  initialize
  ... all the methods that AR creates for us! 
3. What are some of the conventions in AR? 
  must migrate always!!!! ( migration file naming conventions )
  tables are plural 
  models are singular
  if you want to alter a migration file... you've gotta rollback (or drop), make the updates, migrate again
  models need to inherit from AR::Base
  don't change anything in schema directly 
  file structure
    db > migrate > migration files
    db > seeds.rb
  As opposed to oop (just .new) we need ( .new + .save ) or ( .create ) 
  Josh ==> how do we tell models who they belong to? ==> macros!!!!


## Practice goals
- Add columns cost (float) and distance (float) to ride
- 

## Process starting from scratch (say... for ze project?)
1. Write out your domain & be sure about it 
** 
2. Create all model files & set up AR relationship macros
3. Create your migrations (one by one) rake db:create_migration for one, fill it out, run it, check schema
    then move on to the next one 
**
4. Create some seeds and run rake db:seed
5. TEST in rake console 

____

### Outline
* Recap of purpose of databases, SQL, & ORMs
* Review project setup
* Show how to use `rake` tasks
* Set up ActiveRecord on one of our models
  * Demonstrate how to work with migration files: `migrate` and `rollback`
  * Write CRUD on a model using ActiveRecord
* Review seeding
* Talk about pluralization/singularization
* Set up ActiveRecord on second model
* Set up ActiveRecord on third model with relationships!
* macros for relationships in AR 

* To complete on your own or with a partner:
  - Set up ActiveRecord another model



  Driver -< Ride >- Passenger

____

### ActiveRecord

What are the steps for setting up ActiveRecord on a model?

1. Create model
  - create the file and class definition
2. Create migration
  - set of instructions for how to change the database
  - `rake db:create_migration NAME=create_games`
```rb
class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      # attributes?
      # title, rating, goals, genre
      t.string :title
      t.integer :rating
      t.string :goals
      t.string :genre
 
      t.timestamps
    end
  end
end
```
3. Run migration
 - `rake db:migrate`

4. Check your schema
  - `rake db:migrate:status`
  - and check your schema.rb file!

5. Test!

____

### Rake

Rake lets us save some set instructions we want the computer to run into a command that we can call in the terminal using `rake` ie: `rake db:create_migration NAME="create_tweets"`

If we want to check what tasks we have available to us, we can do `rake --tasks` or `rake -T`

____

### Migrations
Migrations are ActiveRecord keeps track of database changes over time. Think of migrations as *version control* (like git) for your database.

We specify how we want the database to change in the migration file: [docs](https://guides.rubyonrails.org/active_record_migrations.html)

* We can create migrations using `rake db:create_migration NAME="the_name_we_want`
* We can check what migrations have been run so far using `rake db:migrate:status`
* We tell ActiveRecord to apply what we wrote in the migration files to the database using `rake db:migrate`


____


### ActiveRecord Conventions
ActiveRecord relies heavily on naming conventions to do its metaprogramming (aka *magic*), and following those naming conventions is important if you want ActiveRecord to work as intended.

For ActiveRecord to connect between a model and a table, the model name should be *singular* and the table name should be *plural*. ActiveRecord comes with `.singularize` and `.pluralize` methods that you can call on strings to check what how to follow naming convention:

```rb
  "tweet".pluralize
  # => "tweets"

  "tweets".singularize
  # => "tweet"

  "person".pluralize
  # => people

  "human".pluralize
  # => humen (????)
```

____


### Methods from ActiveRecord

* Model.new - creates a new instance in local memory without persistence
* Model#save - inserts or updates instance in db
* Model.create - Model.new + Model#save
* Model.all - all instances
* Model.first - instance with the lowest ID in the db
* Model.last - instance with the highest ID in the db
* Model.find - find one instance by id
* Model.find_by(attribute: value) - can find one instance by attribute-value pair(s)
* Model.where(attribute: value) - can find many instances by attribute-value pair(s)
* Model#update - takes a hash and updates an instance in db
* Model#destroy - delete a row in the database
* Model.destroy_all - delete all rows in a table

____


### Extra Resources
- [ActiveRecord Basics](https://guides.rubyonrails.org/active_record_basics.html)
- [ActiveRecord Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
- [ActiveRecord Querying](https://guides.rubyonrails.org/active_record_querying.html)