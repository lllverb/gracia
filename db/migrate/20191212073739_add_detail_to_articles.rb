class AddDetailToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :detail, :string
  end
end
