class Score < ApplicationRecord

  belongs_to :player
  belongs_to :hole 
end
