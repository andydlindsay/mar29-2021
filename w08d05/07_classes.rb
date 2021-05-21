class Car
  def initialize make, model, year
    @make = make
    @model = model
    @year = year
  end

  # attr_reader :model
  # attr_writer :model

  attr_accessor(:year, :model, :make)

  # def make
  #   @make
  # end

  # def make= new_make
  #   @make = new_make
  # end
end

car = Car.new 'Toyota', 'Tercel', 1986
p car

car.make = 'Volkswagon'
puts car.make
p car

puts car.model
car.model = 'Ram'
p car

puts car.year
car.year = 2011
p car
