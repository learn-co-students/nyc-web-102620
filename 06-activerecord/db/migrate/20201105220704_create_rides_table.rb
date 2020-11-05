class CreateRidesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :rides do |t|
      t.integer :driver_id
      t.integer :passenger_id

      t.timestamps
    end
  end
end
