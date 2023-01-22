class Building < ApplicationRecord
  belongs_to :player
  # disable STI
  self.inheritance_column = :_type_disabled
end
