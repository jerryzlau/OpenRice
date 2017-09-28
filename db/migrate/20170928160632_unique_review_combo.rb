class UniqueReviewCombo < ActiveRecord::Migration[5.1]
  def change
    add_index :reviews, [:restaurant_id, :author_id], unique: true 
  end
end
