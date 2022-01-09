class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }

  has_many :reviews
  has_many :movies, through: :reviews
end
