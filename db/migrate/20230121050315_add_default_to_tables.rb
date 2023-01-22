class AddDefaultToTables < ActiveRecord::Migration[7.0]
  def change
    change_column :players, :money, :integer, default: 16
    change_column :players, :position, :integer, default: 0
    change_column :players, :is_alive, :boolean, default: true
    add_column :players, :turn, :integer
    change_column :buildings, :player_id, :integer, default: 0
  end
end
