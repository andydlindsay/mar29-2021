require 'rails_helper'

RSpec.describe Character, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"

  # describe 'Validations' do

    before :each do
      @character = Character.new(
        name: 'Goku',
        race: 'Human',
        planet: Planet.new(
          name: 'Earth'
        )
      )
    end

    it "is valid will all attributes given" do
      expect(@character).to be_valid
    end

    it "is not valid will no name" do
      @character.name = nil

      expect(@character).to be_invalid

      # p character.errors.full_messages
      expect(@character.errors.full_messages[0]).to eq("Name can't be blank")
    end

    it "is not valid will no planet" do
      @character.planet = nil

      expect(@character).to be_invalid

      # p character.errors.full_messages
      expect(@character.errors.full_messages[0]).to eq("Planet must exist")
    end

    it "is valid without a race" do
      @character.race = nil

      expect(@character).to be_valid
    end

  # end

end
