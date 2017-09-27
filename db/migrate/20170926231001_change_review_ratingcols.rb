class ChangeReviewRatingcols < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :rating
    add_column :reviews, :food, :integer, default: 1
    add_column :reviews, :ambience, :integer, default: 1
    add_column :reviews, :service, :integer, default: 1
    add_column :reviews, :value, :integer, default: 1
  end
end
