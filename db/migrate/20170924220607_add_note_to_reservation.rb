class AddNoteToReservation < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :notes, :string
  end
end
