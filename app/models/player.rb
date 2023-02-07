class Player < ApplicationRecord
  has_many :buildings
  belongs_to :game
  after_create_commit { broadcast_append_to('players') }
end
