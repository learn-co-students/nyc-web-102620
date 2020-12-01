class SignupsController < ApplicationController
  def new
    @signup = Signup.new
  end

  def create
    signup = Signup.create(signup_params)

    if signup.valid?
      redirect_to camper_path(signup.camper_id)
    else
      flash[:signup_errors] = signup.errors.full_messages
      redirect_to new_signup_path
    end
  end

  private

  def signup_params
    params.require(:signup).permit(:time, :camper_id, :activity_id)
  end
end