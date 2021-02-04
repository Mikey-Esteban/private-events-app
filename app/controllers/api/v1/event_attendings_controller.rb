class Api::V1::EventsAttendingsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    # find the correct Event through the params
    # grab current user, use .attending_events method
    # add event to attending events array -- > user.attending_events << event
    

  end

  private


end
