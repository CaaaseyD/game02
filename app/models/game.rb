class Game < ApplicationRecord
  has_many :players
  accepts_nested_attributes_for :players
end
