class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    puts "users#show ran"
  end

end
