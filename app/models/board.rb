class Board < ApplicationRecord
  has_many :cards #?
  belongs_to :user # or belongs to a game? neither?
end

###############DELETE?########################
