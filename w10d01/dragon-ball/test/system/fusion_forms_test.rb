require "application_system_test_case"

class FusionFormsTest < ApplicationSystemTestCase
  setup do
    @fusion_form = fusion_forms(:one)
  end

  test "visiting the index" do
    visit fusion_forms_url
    assert_selector "h1", text: "Fusion Forms"
  end

  test "creating a Fusion form" do
    visit fusion_forms_url
    click_on "New Fusion Form"

    click_on "Create Fusion form"

    assert_text "Fusion form was successfully created"
    click_on "Back"
  end

  test "updating a Fusion form" do
    visit fusion_forms_url
    click_on "Edit", match: :first

    click_on "Update Fusion form"

    assert_text "Fusion form was successfully updated"
    click_on "Back"
  end

  test "destroying a Fusion form" do
    visit fusion_forms_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Fusion form was successfully destroyed"
  end
end
