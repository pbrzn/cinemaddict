class ReviewsSerializer
  def initialize(review_object)
    @review = review_object
  end

  def to_serialized_json
    @review.to_json(:include => [:movie, :user])
  end
end
