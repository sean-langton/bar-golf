class Team < ApplicationRecord

  belongs_to :tournament
  has_many :teamplayers
  has_many :players, through: :teamplayers
end
