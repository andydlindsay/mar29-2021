# hash is a collection of key/value pairs
# associative arrays

# original form
user = {
  'first_name' => 'John',
  'last_name' => 'Stamos'
}

p user['first_name']

# intermediate form
user = {
  :first_name => 'John',
  :last_name => 'Stamos'
}

# final form
user = {
  first_name: 'John',
  last_name: 'Stamos'
}

p user['last_name'.to_sym]
