class Api::V1::RegistrationsController < ApplicationController
  protect_from_forgery  with: :null_session
  
  def create
    user = User.new(user_params)

    if user.save
      render json: UserSerializer.new(user).serializable_hash.to_json
    else
      render json: { error: blog.errors.messages }, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
