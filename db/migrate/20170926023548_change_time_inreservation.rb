class ChangeTimeInreservation < ActiveRecord::Migration[5.1]
  def change
    remove_column :reservations, :book_time
    remove_column :reservations, :book_date
    add_column :reservations, :booking, :datetime, null: false
  end
end
