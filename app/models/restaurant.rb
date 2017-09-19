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
  validates :owner_id, :price_range, :capacity, :address, :cusine_type, presence: true
  validates :phone_num, :website, :dining_style, :description, presense: true
  validates :open_time, :close_time, presense: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  classname: :User

  has_many :reservations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  classname: :Reservation



end
