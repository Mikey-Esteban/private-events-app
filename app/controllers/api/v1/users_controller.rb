class Api::V1::UsersController < ApplicationController
  # before_action :authenticate_user!

  def show
    user = User.find_by(id: params[:id])

    render json: UserSerializer.new(user, options).serializable_hash.to_json
  end

  private

  def options
    @options ||= {
      include: %i[created_events]
    }
  end

end
