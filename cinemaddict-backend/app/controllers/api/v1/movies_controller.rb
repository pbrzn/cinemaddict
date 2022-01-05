class Api::V1::MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: MovieSerializer.new(movies)
  end

  def create
    movie = Movie.create(movie_params)
    render json: MovieSerializer.new(movie)
  end

  def show
    movie = Movie.find_by(id: params[:id])
    render json: MovieSerializer.new(movie)
  end

  def update
    movie = Movie.update(movie_params)
    render json: MovieSerializer.new(movie)
  end
end
