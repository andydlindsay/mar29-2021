require "test_helper"

class FusionFormsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fusion_form = fusion_forms(:one)
  end

  test "should get index" do
    get fusion_forms_url
    assert_response :success
  end

  test "should get new" do
    get new_fusion_form_url
    assert_response :success
  end

  test "should create fusion_form" do
    assert_difference('FusionForm.count') do
      post fusion_forms_url, params: { fusion_form: {  } }
    end

    assert_redirected_to fusion_form_url(FusionForm.last)
  end

  test "should show fusion_form" do
    get fusion_form_url(@fusion_form)
    assert_response :success
  end

  test "should get edit" do
    get edit_fusion_form_url(@fusion_form)
    assert_response :success
  end

  test "should update fusion_form" do
    patch fusion_form_url(@fusion_form), params: { fusion_form: {  } }
    assert_redirected_to fusion_form_url(@fusion_form)
  end

  test "should destroy fusion_form" do
    assert_difference('FusionForm.count', -1) do
      delete fusion_form_url(@fusion_form)
    end

    assert_redirected_to fusion_forms_url
  end
end
