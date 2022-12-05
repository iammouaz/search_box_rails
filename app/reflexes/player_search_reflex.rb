# frozen_string_literal: true

class PlayerSearchReflex < ApplicationReflex
  def search(query = '')
    players = Player.where('name LIKE ?', "%#{query}%")
    morph '#players-list', render(partial: 'players/players', locals: { players: players })
    morph '#reset-link', render(partial: 'players/reset_link', locals: { query: query })
  end
end
