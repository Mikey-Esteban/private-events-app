class Event < ApplicationRecord
  belongs_to :creator, class_name: "User"
  # has_many :event_attendings, foreign_key: :attending_event_id
  # has_many :attendees, through: :event_attendings, source: :event_attendee

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end
end
