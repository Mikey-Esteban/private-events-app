class Api::V1::EventsController < ApplicationController
  protect_from_forgery with: :null_session
  # before_action :authenticate_user!

  def index
    events = Event.all.order(created_at: :desc)

    render json: EventSerializer.new(events).serializable_hash.to_json
  end

  def show
    event = Event.find_by(slug: params[:slug])

    render json: EventSerializer.new(event).serializable_hash.to_json
  end

  def create
    puts "params: #{params}"
    user = User.find_by(id: params[:event][:creator_id])
    puts "user: #{user}"
    event = user.created_events.new(event_params)
    puts "event: #{event}"

    if event.save
      render json: EventSerializer.new(event).serializable_hash.to_json
    else
      render json: { error: event.errors.messages }, status: 422
    end
  end

  def update
    event = Event.find_by(slug: params[:slug])

    if event.update(event_params)
      render json: EventSerializer.new(event).serializable_hash.to_json
    else
      render json: { error: event.errors.messages }, status: 422
    end
  end

  def destroy
    event = Event.find_by(slug: params[:slug])

    if event.destroy
      head :no_content
    else
      render json: { error: event.errors.messages }, status: 422
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :date, :creator_id)
  end



end
