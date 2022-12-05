# frozen_string_literal: true

class ArticleSearchReflex < ApplicationReflex
  def search(query = '')
    articles = Article.where('name LIKE ?', "%#{query}%")
    morph '#articles-list', render(partial: 'articles/articles', locals: { articles: articles })
    morph '#reset-link', render(partial: 'articles/reset_link', locals: { query: query })
  end
end
