class GamesController < ApplicationController

  def new
    @games = Game.all
    @game = Game.new
    4.times { @game.players.build }
  end

  def create
    @game = Game.new(game_params)
    @players = decide_turn(@game)
    if @game.save
      redirect_to game_path(@game)
    end
  end

  def show
    @game = Game.find(params[:id])
    @players = @game.players.sort_by{ |k| k[:turn] }
    @buildings = Building.all
  end

  def gamerun(player, dicenumber)
    #Players take turns to roll the dice
    newGame.move(dicenumber, player)
    newGame.pay_rent(player)
    # Show the result of this turn
    newGame.status(dicenumber, player)
    sleep(0.5)
    # Check the player is alive or not
    if newGame.check_is_alive?(player) == false
    end
  end

  def decide_turn(game)
    myArray = [1, 2, 3, 4]
    selected = []
    selected << myArray.sample
    selected << (myArray - selected).sample
    selected << (myArray - selected).sample
    selected << (myArray - selected).sample
    players = game.players.to_a
    for i in 0..3
      players[i].turn = selected[i]
    end
    players.each{ |p| p.save!}
    return players.sort! {|x, y| x["turn"] <=> y["turn"]}
  end



  private
  def game_params
    params.require(:game).permit(players_attributes: [:id, :name, :money, :position, :is_alive, :game_id])
  end
end
