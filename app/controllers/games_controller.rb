class GamesController < ApplicationController

  def new
    @games = Game.all
    @game = Game.new
    4.times { @game.players.build }
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      redirect_to game_path(@game)
    end
  end

  def show
    @game = Game.find(params[:id])
  end

  private
  def game_params
    params.require(:game).permit(players_attributes: [:id, :name, :money, :position, :is_alive, :game_id])
  end
end
