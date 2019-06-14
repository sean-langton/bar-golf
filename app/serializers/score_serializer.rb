class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :hole, :player, :score

  belongs_to :hole
  belongs_to :player
end
