class AddCostAndDistanceToRides < ActiveRecord::Migration[6.0]
  def change
    add_column :rides, :cost, :float
    add_column :rides, :distance, :float
  end
end
