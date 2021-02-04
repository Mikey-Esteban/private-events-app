class User < ApplicationRecord
  acts_as_token_authenticatable

  has_many :created_events, foreign_key: "creator_id", class_name: "Event", dependent: :destroy
  has_many :event_attendings, foreign_key: :attendee_id
  has_many :attending_events, through: :event_attendings

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
