class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :email, :created_date, :authentication_token

  attribute :created_date do |user|
    user && user.created_at.strftime('%d/%m/%Y')
  end

  has_many :created_events, serializer: EventSerializer
end
