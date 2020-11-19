class CreateAliens < ActiveRecord::Migration[6.0]
  def change
    create_table :aliens do |t|
      t.string :name
      t.string :user_name
      t.integer :age
      t.string :color
      t.integer :abduction_count

      t.timestamps
    end
  end
end
