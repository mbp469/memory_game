class Game < ApplicationRecord
  belongs_to :user
  has_many :cards #through?
  has_one :board #?

end
