class CreateBuildings < ActiveRecord::Migration[7.0]
  def change
    create_table :buildings do |t|
      t.string :name
      t.integer :price
      t.integer :colour
      t.string :type
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
