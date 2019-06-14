class PlayerController < ApplicationController
  def show
  end

  def new
  end

  def create
    @team = Team.find(player_params[:team_id])
    @player = Player.create(name: player_params[:name])
    @team.players << @player
    @teams = Team.where(tournament_id: player_params[:tournament_id])
    render json: @teams
  end

  def destroy
  end

  def index
    @players = Tournament.find(params[:tournament_id]).players
    render json: @players
  end

  def player_params
    params.permit(:name, :team_id, :tournament_id)
  end
end
