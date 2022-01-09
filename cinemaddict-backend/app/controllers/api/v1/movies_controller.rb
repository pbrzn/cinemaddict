class Api::V1::MoviesController < ApplicationController
  skip_before_action :authorized
  
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end

  def create
    movie = Movie.create(movie_params)
    render json: MovieSerializer.new(movie), status: :created_successfully
  end

  def show
    movie = Movie.find_by(id: params[:id])
    render json: MovieSerializer.new(movie)
  end

  def update
    movie = Movie.update(movie_params)
    render json: MovieSerializer.new(movie), status: :updated_successfully
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :poster, :director, :writer, :cinemaddict_rating, :imdb_id)
  end
end
