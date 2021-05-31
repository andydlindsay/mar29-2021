# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating planets"

10.times do
  Planet.create(
    name: Faker::JapaneseMedia::DragonBall.planet
  )
end

puts "retrieving planets"

planets = Planet.all.to_a

puts "creating characters"

25.times do
  Character.create(
    name: Faker::JapaneseMedia::DragonBall.character,
    race: Faker::JapaneseMedia::DragonBall.race,
    planet: planets.sample
  )
end

puts "all done!!"
