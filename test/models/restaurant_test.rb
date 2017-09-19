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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
