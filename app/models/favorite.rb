# == Schema Information
#
# Table name: favorites
#
#  id            :integer          not null, primary key
#  restaurant_id :integer          not null
#  customer_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Favorite < ApplicationRecord
  validates :restaurant_id, :customer_id, presence: true 
end
