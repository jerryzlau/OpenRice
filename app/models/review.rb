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
  validates :food, :ambience, inclusion: {in: [1,2,3,4,5]}, presence: true
  validates :value, :service, inclusion: {in: [1,2,3,4,5]}, presence: true
  validates_uniqueness_of :author_id, scope: :restaurant_id

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

end
