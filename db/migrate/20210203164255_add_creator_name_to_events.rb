class AddCreatorNameToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :creator_name, :string
  end
end
