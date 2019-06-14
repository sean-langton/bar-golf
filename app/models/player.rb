class Player < ApplicationRecord
    validates :name, presence: true

    has_many :teamplayers
    has_many :teams, through: :teamplayers
    has_many :scores
    has_many :holes, through: :scores
end
