## articlesテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|detail|string|null: false|
### Association
- has_many :texts


## textsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|article_id|integer|null: false, foreign_key: true|
|number|integer|null: false|
|article_type|string|null: false|
### Association
- belongs_to :article