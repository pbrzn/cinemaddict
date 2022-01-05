class Movie < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  def find_avg_rating
    self.reviews.map{ |rev| rev.rating }.sum.to_f / self.reviews.length.to_f
  end
end
