class CreateAliens < ActiveRecord::Migration[6.0]
  def change
    create_table :aliens do |t|
      t.string :name
      t.string :user_name
      t.integer :age
      t.integer :abduction_count
      t.string :img_url

      t.timestamps
    end
  end
end
