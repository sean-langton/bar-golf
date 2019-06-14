class ScoreController < ApplicationController
  def show
  end

  def new

  end

  def create
    @score = Score.find_or_create_by(player_id: score_params[:playerId], hole_id: score_params[:holeId])
    @score.score = score_params[:score]
    @score.save
    render json: @score
  end

  def destroy
  end

  def index
    @scores = Tournament.find(params[:tournament_id]).scores
    render json: @scores
  end

  def score_params
    params.permit(:score, :playerId, :holeId)
  end

end
