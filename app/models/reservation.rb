# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  customer_id   :integer          not null
#  restaurant_id :integer          not null
#  num_ppl       :integer          not null
#  book_time     :time             not null
#  book_date     :time             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reservation < ApplicationRecord
  validates :customer_id, :restaurant_id, :booking, :notes, presence: true
  validates :num_ppl, numericality: { less_than_or_equal_to: 20 }, presence: true

  belongs_to :customer,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :User

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant


end
