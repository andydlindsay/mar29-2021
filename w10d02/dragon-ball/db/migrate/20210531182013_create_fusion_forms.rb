class CreateFusionForms < ActiveRecord::Migration[6.1]
  def change
    create_table :fusion_forms do |t|

      t.timestamps
    end
  end
end
