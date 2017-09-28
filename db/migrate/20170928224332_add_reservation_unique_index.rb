class AddReservationUniqueIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :reservations, [:restaurant_id, :customer_id], unique: true 
  end
end
