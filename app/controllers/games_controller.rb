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
    @players = decide_turn(@game)
  end

  def decide_turn(game)
    myArray = [1, 2, 3, 4]
    selected = []
    selected << myArray.sample
    selected << (myArray - selected).sample
    selected << (myArray - selected).sample
    selected << (myArray - selected).sample
    players = game.players.map
    for i in 0..3
      players.next.turn = selected[i]
    end
    return @game.players.to_a
  end



  private
  def game_params
    params.require(:game).permit(players_attributes: [:id, :name, :money, :position, :is_alive, :game_id])
  end
end
