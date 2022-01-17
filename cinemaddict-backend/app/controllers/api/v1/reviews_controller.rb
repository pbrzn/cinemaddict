class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    reviews = Review.all
    render json: ReviewSerializer.new(reviews)
  end

  def create
    review = Review.create(review_params)
    movie = Movie.find_by(id: review.movie_id)
    movie.update(cinemaddict_rating: movie.find_avg_rating)
    render json: ReviewSerializer.new(review)
  end

  def show
    review = Review.find_by(id: params[:id])
    render json: ReviewSerializer.new(review)
  end

  def update
    review = Review.update(review_params)
    if review_params.includes?(review.rating)
      movie = Movie.find_by(id: review.movie_id)
      movie.update(cinemaddict_rating: movie.find_avg_rating)
    end
    render json: ReviewSerializer.new(review)
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    render json: { message: "This review has been deleted" }
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :rating, :user_id, :movie_id)
  end
end
