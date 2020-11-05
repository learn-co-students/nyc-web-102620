class CreateDrivers < ActiveRecord::Migration[6.0]
  def change
    create_table :drivers do |t|
      t.integer :age
      t.string :name
      t.string :car
      t.integer :points
      t.integer :experience
 
      t.timestamps
    end
  end
end
