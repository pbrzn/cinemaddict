class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :body
      t.string :rating

      t.timestamps
    end
  end
end
