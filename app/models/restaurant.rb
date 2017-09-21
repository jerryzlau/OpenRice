# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  owner_id     :integer          not null
#  price_range  :integer          not null
#  capacity     :integer          not null
#  address      :string           not null
#  cusine_type  :string           not null
#  phone_num    :string           not null
#  website      :string           not null
#  dining_style :string           not null
#  description  :text             not null
#  open_time    :time             not null
#  close_time   :time             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :owner_id, :capacity, :address, :cusine_type, presence: true
  validates :phone_num, :website, :dining_style, :description, presence: true
  validates :start_price, :end_price, presence: true 
  validates :name, presence: true, uniqueness: true
  validates :open_time, :close_time, presence: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :reservations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Reservation

  has_many :favorites,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Favorite

  has_many :reviews,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Review

end
