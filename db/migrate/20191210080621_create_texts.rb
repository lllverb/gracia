class CreateTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :texts do |t|
      t.text :text, null: false
      t.references :article, foreign_key: true, null: false
      t.timestamps
    end
  end
end
