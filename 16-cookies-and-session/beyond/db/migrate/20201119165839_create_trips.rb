class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.integer :alien_id
      t.integer :planet_id
      t.string :reason
      t.integer :length

      t.timestamps
    end
  end
end
