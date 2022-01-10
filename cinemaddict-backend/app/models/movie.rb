class Movie < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  def find_avg_rating
    rating = self.reviews.map{ |rev| rev.rating }.sum.to_f / self.reviews.length.to_f
    rating.round(1)
  end
end
