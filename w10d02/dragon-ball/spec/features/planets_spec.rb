require 'rails_helper'
require 'support/database_cleaner'

RSpec.feature "Planets", type: :feature, js: true do
  # pending "add some scenarios (or delete) #{__FILE__}"

  before :each do
    planet = Planet.create(
      name: 'Screenshot 8'
    )
    Planet.create(
      name: 'Vegeta'
    )
    Planet.create(
      name: 'Namek'
    )

    Character.create(
      name: 'Goku',
      race: 'Space Lemur',
      planet: planet
    )

    visit planets_path
  end

  scenario 'can visit the Planets page' do
    save_screenshot 'test_one.png'
  end

  scenario 'visit the Planets and see 3 planets' do
    # puts page.html

    expect(page).to have_css '.planet', count: 3
  end

  scenario 'visit the planets page, click on a link, visit the characters page' do
    save_screenshot 'test_three-planets-page.png'

    # click_on 'characters'
    # first(:link, 'characters').click
    click_link 'characters', match: :first

    save_screenshot 'test_three-characters-page.png'

    expect(page).to have_text /all the characters/i

    expect(page).to have_css '.character', count: 1
  end

end
