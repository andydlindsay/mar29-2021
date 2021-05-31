# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating restaurants"

10.times do
  Restaurant.create(
    name: Faker::Restaurant.name,
    food_type: Faker::Restaurant.type,
    description: Faker::Restaurant.description
  )
end

puts "retrieving restaurants"

restaurants = Restaurant.all.to_a

puts "creating reviews"

100.times do
  Review.create(
    restaurant: restaurants.sample,
    review: Faker::Restaurant.review
  )
end

puts "all done!"
