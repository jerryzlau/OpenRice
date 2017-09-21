class AddRestaurantName < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :name, :string, null: false
  end
end
