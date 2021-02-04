class EventSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :date, :slug, :creator_id, :creator_name

  has_many :attendees, serializer: UserSerializer
end
