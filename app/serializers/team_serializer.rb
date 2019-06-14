class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :tournament
  has_many :players
end
