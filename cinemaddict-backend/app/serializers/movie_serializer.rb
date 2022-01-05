class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :year, :poster, :director, :starring, :imdb_id,
  :reviews
end
