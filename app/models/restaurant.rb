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

  DEFAULT = "http://res.cloudinary.com/jerryzlau/image/upload/v1506558455/default-food-image_jrdevc.png"

  validates :owner_id, :capacity, :cusine_type, presence: true
  validates :phone_num, :website, :dining_style, :description, presence: true
  validates :start_price, :end_price, presence: true
  validates :open_time, :close_time, presence: true
  # validation for searching
  validates :name, presence: true, uniqueness: true, uniqueness: {case_sensitive: false}
  validates :address, presence: true, uniqueness: true, uniqueness: {case_sensitive: false}

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

  after_initialize :ensure_image_url

  def ensure_image_url
    self.image_url ||= DEFAULT
  end

  def self.find_by_keyword(keyword)
    Restaurant.where("lower(address) like ?", "%#{keyword.downcase}%")
              .or(Restaurant.where("lower(name) like ?", "%#{keyword.downcase}%"))
              .or(Restaurant.where("lower(cusine_type) like ?", "%#{keyword.downcase}%"))
  end

end
