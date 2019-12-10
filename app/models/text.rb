class Text < ApplicationRecord
  belongs_to :article
  validates :text, presence: true
  validates :article_id, presence: true
  validates :number, presence: true
  validates :article_type, presence: true
end
