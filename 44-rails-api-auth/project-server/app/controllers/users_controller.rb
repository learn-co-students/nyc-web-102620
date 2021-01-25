class UsersController < ApplicationController
  before_action :authorize

  # before_action :authorize
  def show
    render json: @user
  end

  # before_action :authorize
  def update
    @user.update(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:bio, :avatar)
  end

end