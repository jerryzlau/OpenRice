# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  owner           :boolean          default(FALSE), not null
#  primary_city    :string           not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :primary_city, :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :owner, inclusion: {in: [true, false]}

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :restaurants,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Restaurant

  has_many :reservations,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :Reservation

  has_many :favorites,
  primary_key: :id,
  foreign_key: :customer_id,
  class_name: :Favorite

  has_many :reviews,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Review

  has_many :favorite_restaurants,
  through: :favorites,
  source: :restaurant


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def favorited?(restaurant)
    self.favorite_restaurants.include?(restaurant)
  end

end
