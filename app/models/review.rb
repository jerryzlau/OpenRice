# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  restaurant_id :integer          not null
#  rating        :integer          not null
#  comment       :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :restaurant_id, :comment, presence: true
  validates :rating, inclusion: {in: [1,2,3,4,5]}, presence: true 
end
