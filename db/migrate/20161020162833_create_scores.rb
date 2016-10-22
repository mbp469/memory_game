class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.integer :user_id
      t.integer :turns_taken
      t.references :user, foreign_key: true
    end
  end
end
