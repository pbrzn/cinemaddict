class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :body, :rating, :user, :movie, :movie_id, :user_id
end
