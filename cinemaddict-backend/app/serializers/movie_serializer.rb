class MovieSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :year, :director, :starring, :reviews
end
