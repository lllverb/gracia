class AddTypeColumnToTextsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :texts, :article_type, :string, null: false
  end
end
