# what is a score?
class Score < ApplicationRecord
  belongs_to :user
end

#Score is the table that holds records of game statistics.
#aka: counter from js
#aka: maybe a duration of game thing too?
