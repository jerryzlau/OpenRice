class RestaurantPricerange < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :price_range
    add_column :restaurants, :start_price, :integer, null: false
    add_column :restaurants, :end_price, :integer, null: false 
  end
end
