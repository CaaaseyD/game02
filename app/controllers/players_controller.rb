class PlayersController < ApplicationController
  def index
    @game = Game.find(params[:game_id])
    @players = @game.players.sort_by{ |k| k[:turn] }
  end

  private
  def player_params
    params.require(:player).permit(:id, :name, :money, :position, :is_alive, :turn, :game_id)
  end
end
