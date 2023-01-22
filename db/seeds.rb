# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json'

Player.destroy_all
Building.destroy_all
Game.destroy_all
board_file_path = "./app/assets/test/board.json"
roll_file_path = './app/assets/test/rolls_2.json'

# Create a game
game = Game.new
game.save
# Create an admin
admin = Player.new(name: "admin")
admin.game = game
admin.save
puts "Game is ready and Admin is ready"

# Load the board
board_array = JSON.parse(File.read(board_file_path))
sym_board = board_array.map{ |b| b.symbolize_keys}
sym_board.map do |b|
  b.merge!(player: admin)
  Building.create(b)
end

puts "Board is ready"

# Load the dice array
@dice_array = JSON.parse(File.read(roll_file_path))
