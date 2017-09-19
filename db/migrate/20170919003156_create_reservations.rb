class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.integer :customer_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :num_ppl, null: false
      t.time :book_time, null: false
      t.time :book_date, null: false

      t.timestamps
    end
  end
end
