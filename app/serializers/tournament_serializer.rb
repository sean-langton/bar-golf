class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :per_team, :entry_code
  has_many :holes
  has_many :teams
end
