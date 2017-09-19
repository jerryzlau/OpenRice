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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
