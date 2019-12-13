class ArticlesController < ApplicationController
  def create
  end

  def edit
    @article = Article.find(params[:id])
    @others = Article.all.where.not(id: params[:id])
  end

  def edit_title
    @article = Article.find(params[:id])
    @article.update(title: params[:title])
  end
  
  def edit_detail
    @article = Article.find(params[:id])
    @article.update(detail: params[:detail])
  end

  def save_article
    @text = Text.create(article_id: params[:id],text: params[:text], number: params[:number], article_type: params[:article_type])
  end

  def forward
    @texts = Text.where(article_id: params[:id]).find_by(number: params[:number])
    @forward = Text.where(article_id: params[:id]).where('number < ?', params[:number]).order("number DESC").first
    @texts.update(number: @texts.number - 1)
    @forward.update(number: @forward.number + 1)
  end

  def backward
    @texts = Text.where(article_id: params[:id]).find_by(number: params[:number])
    @backward = Text.where(article_id: params[:id]).where('? < number', params[:number]).order("number ASC").first
    @texts.update(number: @texts.number + 1)
    @backward.update(number: @backward.number - 1)
  end

  def remove_article
    @texts = Text.where(article_id: params[:id]).find_by(number: params[:number])
    @texts.destroy
    @the_backs = Text.where(article_id: params[:id]).where('? < number', params[:number]).order("number")
    @the_backs.each do |t|
      t.update(number: t.number - 1)
    end
  end

end
