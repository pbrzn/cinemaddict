class MoviesSerializer
  def initialize(movie_object)
    @movie = movie_object
  end

  def to_serialized_json
    @movie.to_json(:include => {
      :reviews => {:except => [:movies]}
      })
  end
end
