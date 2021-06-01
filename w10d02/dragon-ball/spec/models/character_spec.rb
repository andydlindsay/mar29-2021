require 'rails_helper'

RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  before :each do
    @character = described_class.new(
      name: 'Goku',
      race: 'Space Lemur',
      planet: Planet.new(
        name: 'Earth'
      )
    )
  end

  it 'is valid when all properties are present' do
    expect(@character).to be_valid
  end
  
  it 'is not valid if name is not present' do
    @character.name = nil

    expect(@character).to be_invalid

    # p character.errors.full_messages

    expect(@character.errors.full_messages[0]).to eq("Name can't be blank")
  end

  it 'is not valid if planet is not present' do
    @character.planet = nil

    expect(@character).to be_invalid

    # p character.errors.full_messages

    expect(@character.errors.full_messages[0]).to eq("Planet must exist")
  end

  it 'is valid if no race present' do
    @character.race = nil

    expect(@character).to be_valid
  end

end
