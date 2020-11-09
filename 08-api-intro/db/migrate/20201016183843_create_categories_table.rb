class CreateCategoriesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.integer :api_id
      t.string :title
    end
  end
end
