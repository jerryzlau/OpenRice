class AddRestaurantImage < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :image_url, :string
  end
end
