class CreatePassengersTable < ActiveRecord::Migration[6.0]
  def change
    create_table :passengers do |t|
      t.string :name
      t.string :bio
      t.float :rating

      t.timestamps
    end
  end
end
