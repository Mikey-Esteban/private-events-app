class CreateEventAttendings < ActiveRecord::Migration[6.0]
  def change
    create_table :event_attendings do |t|
      t.references :attendee, null: false, foreign_key: { to_table: :users }
      t.references :attending_event, null: false, foreign_key: { to_table: :events }

      t.timestamps
    end
  end
end
