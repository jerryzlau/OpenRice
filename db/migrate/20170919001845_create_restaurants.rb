class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.integer :owner_id, null: false
      t.integer :price_range, null: false
      t.integer :capacity, null: false
      t.string :address, null: false
      t.string :cusine_type, null: false
      t.string :phone_num, null: false
      t.string :website, null: false
      t.string :dining_style, null: false
      t.text :description, null: false
      t.time :open_time, null: false
      t.time :close_time, null: false

      t.timestamps
    end
  end
end
