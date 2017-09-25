class ChangeNoteColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :reservations, :notes
    add_column :reservations, :notes, :text
  end
end
