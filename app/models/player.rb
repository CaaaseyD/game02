class Player < ApplicationRecord
  has_many :buildings
  belongs_to :game
end
