class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :money
      t.integer :position
      t.boolean :is_alive

      t.timestamps
    end
  end
end
