class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :year, :poster, :director, :starring, :cinemaddict_rating, :imdb_id, :reviews, :users
end
