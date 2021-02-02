class AddColumnSlugToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :slug, :string
  end
end
