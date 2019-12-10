class ArticlesController < ApplicationController
  def create
    binding.pry
  end

  def edit
    @article = Article.find(params[:id])
  end

  def add_article
    @article = Text.create(article_id: params[:id],text: params[:text], number: params[:number], article_type: "本文")
  end

  def remove_article
    @article = Text.where(article_id: params[:id]).find_by(number: params[:number])
    @article.destroy
    @the_backs = Text.where(article_id: params[:id]).where("number > ?", params[:number])
    @the_backs.each do |t|
      t.update(number: t.number - 1)
    end
  end

  private
  def article_params
  end
end
