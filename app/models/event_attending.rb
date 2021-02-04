class EventAttending < ApplicationRecord
  belongs_to :attendee, class_name: "User"
  belongs_to :attending_event, class_name: "Event"
end
