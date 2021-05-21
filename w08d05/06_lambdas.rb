# closest you're gonna get to a callback

goats = ['Stephen', 'Goaty', 'Billy', 'Phillipe', 'Goatie McGoatFace', 'Zanthor']

# goats.each do |goat|
#   puts "hello there #{goat}"
# end

# between do..end is a block of code

my_lambda = lambda do |goat|
  puts "hello there #{goat}"
end

goats.each &my_lambda

def accepts_a_lambda &code_to_run
  code_to_run.call
end

say_something = lambda do puts "I'm giving up on you" end

# say_something.call

# my_lambda.call 'goat name'

accepts_a_lambda &say_something
