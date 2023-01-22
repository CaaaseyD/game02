class ChangeTableInBuildng < ActiveRecord::Migration[7.0]
  def change
    change_column :buildings, :colour, :string
  end
end
