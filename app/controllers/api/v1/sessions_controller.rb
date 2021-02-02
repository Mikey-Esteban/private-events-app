class Api::V1::SessionsController < ApplicationController
  protect_from_forgery  with: :null_session

  def create
    user = User.find_by(email: params[:email])

    if user&.valid_password?(params[:password])
      render json: UserSerializer.new(user).serializable_hash.to_json
    else
      render json: { error: blog.errors.messages }, status: 422
    end
  end

  def destroy
  end
end
