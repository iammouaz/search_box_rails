# frozen_string_literal: true

class ArticleSearchReflex < ApplicationReflex
  def search(query)
    articles = Article.where('name LIKE ?', "%#{query[:value].downcase}%")
    morph '#articles-list', render(partial: 'articles/articles', locals: { articles: articles })
    morph '#reset-link', render(partial: 'articles/reset_link', locals: { query: query[:value] })
    if query[:value] != ''
      hundle_tags(query)
    end
  end

  def hundle_tags(query)
    Tag.create!(name: query[:value], user_id: query[:user_id].downcase)
  end
end
