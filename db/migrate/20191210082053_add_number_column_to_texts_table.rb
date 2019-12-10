class AddNumberColumnToTextsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :texts, :number, :integer, null: false
  end
end
