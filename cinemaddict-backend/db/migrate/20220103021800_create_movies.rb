class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :poster
      t.string :director
      t.string :starring
      t.float :cinemaddict_rating

      t.timestamps
    end
  end
end
