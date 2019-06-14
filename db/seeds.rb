# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

tournament_list = [
  ["Test Tournament", "2020-04-20", 2, "BALL"],
  ["Second Test Tournament", "2019-06-09", 4, "OKAY"]
]

hole_list = [
  ["Hole 1", "14:00", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 2", "14:45", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 3", "15:30", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 4", "16:15", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 5", "17:00", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 6", "17:45", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 7", "18:30", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 8", "19:15", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 9", "19:45", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 1],
  ["Hole 10", "14:00", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 2],
  ["Hole 11", "14:45", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 2],
  ["Hole 12", "15:30", 30, "Bud Light", "Pina Colada", "Shot and 20 on Dartboard", 2]
]

team_list = [
  ["Team A", 1],
  ["Team B", 1],
  ["Team C", 1]
]

player_list = [
  "Player 1",
  "Player 2",
  "Player 3",
  "Player 4",
  "Player 5",
  "Player 6"
]

teamplayer_list = [
  [1,1],
  [1,2],
  [2,3],
  [2,4],
  [3,5],
  [3,6]
]

score_list = [
  [-2, 1, 1],
  [0, 2, 1],
  [-1, 3, 1],
  [1, 4, 1],
  [-1, 5, 1],
  [-1, 6, 1],
  [0, 7, 1],
  [1, 8, 1],
  [0, 9, 1],
  [-2, 1, 2],
  [0, 2, 2],
  [-1, 3, 2],
  [1, 4, 2],
  [-1, 5, 2],
  [-1, 6, 2],
  [0, 7, 2],
  [1, 8, 2],
  [0, 9, 2]
  ]

tournament_list.each do |name, date, per_team, entry_code|
  Tournament.create(name: name, date: date, per_team: per_team, entry_code: entry_code)
end

hole_list.each do |name, start_time, duration, par, birdie, eagle, tournament_id|
  Hole.create(name: name, start_time: start_time, duration: duration, par: par, birdie: birdie, eagle: eagle, tournament_id: tournament_id)
end

team_list.each do |name, tournament_id|
  Team.create(name: name, tournament_id: tournament_id)
end

player_list.each do |name|
  Player.create(name: name)
end

teamplayer_list.each do |team_id, player_id|
  Teamplayer.create(team_id: team_id, player_id: player_id)
end

score_list.each do |score, holes_id, player_id|
  Score.create(score: score, hole_id: holes_id, player_id: player_id)
end
