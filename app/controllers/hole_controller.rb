class HoleController < ApiController
  def show
  end

  def new
  end

  def create
    @hole = Hole.create(hole_params)
    render json: @hole
  end

  def destroy
    @hole = Hole.find(params[:id])
    @hole.destroy
    @holes = Hole.where(tournament_id: params[:tournament_id])
    render json: @holes
  end

  def index
    @holes = Hole.where(tournament_id: params[:tournament_id])
    render json: @holes
  end

  def hole_params
    params.permit(:name, :duration, :start_time, :par, :birdie, :eagle, :tournament_id)
  end
end
