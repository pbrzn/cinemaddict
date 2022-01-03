class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :poster
      t.string :runtime
      t.string :genre
      t.string :director
      t.string :writer
      t.string :starring
      t.string :cinemaddict_rating

      t.timestamps
    end
  end
end
