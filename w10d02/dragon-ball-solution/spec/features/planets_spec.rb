require 'rails_helper'

RSpec.feature "Planets", type: :feature, js: true do

  before :each do
    planetOne = Planet.create(
      name: 'Arlia'
    )
    Planet.create(
      name: 'Earth'
    )
    Planet.create(
      name: 'Makyo Star'
    )

    Character.create(
      name: 'Goku',
      race: 'Human',
      planet: planetOne
    )

    visit planets_path
  end
  
  scenario 'display the Planets page' do
    save_screenshot 'test_one.png'
  end

  scenario 'intro to page variable' do
    # puts page
    # puts page.methods
    # puts page.html

    expect(page).to have_text /All the Planets/i
  end

  scenario 'display the Planets page and see three planets' do
    expect(page).to have_css('.planet')

    expect(page).to have_css('.planet', count: 3)
  end

  scenario 'display the Planets page, click a link for one of the planets, visit the characters page' do
    # click_link('characters')
    first(:link, 'characters').click

    save_screenshot 'test_four-after-click.png'

    expect(page).to have_text 'All the characters'
    expect(page).to have_css '.character', count: 1
  end

end
