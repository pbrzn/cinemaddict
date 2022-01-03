class AddUserIdAndMovieIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :user_id, :string
    add_column :reviews, :movie_id, :string
  end
end
