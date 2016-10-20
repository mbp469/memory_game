class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.integer :card_slot
      t.string :card_number

      t.timestamps
    end
  end
end
