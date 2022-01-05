class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :body, :rating, :user, :movie
end
