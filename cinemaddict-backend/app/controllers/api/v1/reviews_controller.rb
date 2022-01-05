class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: ReviewSerializer.new(review)
  end
end
