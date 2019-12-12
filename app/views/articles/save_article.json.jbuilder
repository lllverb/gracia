if @text.article_type == "関連記事"
  json.number @text.number
  json.title Article.find(@text.text).title
  json.detail Article.find(@text.text).detail
end