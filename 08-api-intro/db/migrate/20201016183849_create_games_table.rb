class CreateGamesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :category_id
      t.integer :score
      t.integer :total_possible
    end
  end
end
