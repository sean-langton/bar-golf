class Tournament < ApplicationRecord
  validates :name, presence: true
  validates :date, presence: true
  validates :per_team, presence: true
  validates :entry_code, presence: true

  has_many :holes
  has_many :scores, through: :holes
  has_many :teams
  has_many :players, through: :teams

end
