class FusionFormsController < ApplicationController
  before_action :set_fusion_form, only: %i[ show edit update destroy ]

  # GET /fusion_forms or /fusion_forms.json
  def index
    @fusion_forms = FusionForm.all
  end

  # GET /fusion_forms/1 or /fusion_forms/1.json
  def show
  end

  # GET /fusion_forms/new
  def new
    @fusion_form = FusionForm.new
  end

  # GET /fusion_forms/1/edit
  def edit
  end

  # POST /fusion_forms or /fusion_forms.json
  def create
    @fusion_form = FusionForm.new(fusion_form_params)

    respond_to do |format|
      if @fusion_form.save
        format.html { redirect_to @fusion_form, notice: "Fusion form was successfully created." }
        format.json { render :show, status: :created, location: @fusion_form }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @fusion_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fusion_forms/1 or /fusion_forms/1.json
  def update
    respond_to do |format|
      if @fusion_form.update(fusion_form_params)
        format.html { redirect_to @fusion_form, notice: "Fusion form was successfully updated." }
        format.json { render :show, status: :ok, location: @fusion_form }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @fusion_form.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fusion_forms/1 or /fusion_forms/1.json
  def destroy
    @fusion_form.destroy
    respond_to do |format|
      format.html { redirect_to fusion_forms_url, notice: "Fusion form was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_fusion_form
      @fusion_form = FusionForm.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def fusion_form_params
      params.fetch(:fusion_form, {})
    end
end
