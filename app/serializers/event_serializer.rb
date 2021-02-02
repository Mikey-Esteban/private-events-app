class EventSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :date, :slug, :creator_id
end
