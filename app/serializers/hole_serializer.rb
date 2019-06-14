class HoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_time, :duration, :par, :birdie, :eagle
  belongs_to :tournament
  has_many :scores
  has_many :players, through: :scores
end
