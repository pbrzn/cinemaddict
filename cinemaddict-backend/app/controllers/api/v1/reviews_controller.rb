class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  def create
    review = Review.create(review_params)
    render json: ReviewSerializer.new(review)
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: ReviewSerializer.new(review)
  end

  def update
    review = Review.update(review_params)
    render json: ReviewSerializer.new(review)
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    render json: { message: "This review has been deleted" }
  end
end
