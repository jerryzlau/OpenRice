class Addusercolumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :professional
    add_column :users, :owner, :boolean, default: false, null: false
    add_column :users, :primary_city, :string, null: false
  end
end
