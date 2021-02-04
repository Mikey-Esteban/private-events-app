class Api::V1::EventAttendingsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    # find the correct Event through the params
    event = Event.find_by(slug: params[:event_attending][:slug])
    user = User.find_by(id: params[:event_attending][:attendee_id])
    user.attending_events << event

    render json: EventSerializer.new(event, options).serializable_hash.to_json
  end

  private
  
  def event_attending_params
    params.require(:event_attending).permit(:slug, :attendee_id)
  end

  def options
    @options ||= { include: %i[attendees] }
  end
end
