class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :teams
  has_many :scores
  has_many :holes, through: :scores
end
