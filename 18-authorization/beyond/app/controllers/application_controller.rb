class ApplicationController < ActionController::Base
  before_action :find_current_alien
  before_action :authorized

  def find_current_alien
    # @current_alien = Alien.find(cookies[:alien_id])
    @current_alien = Alien.find_by(id: cookies[:alien_id])
  end 

  def authorized
    redirect_to new_alien_path unless @current_alien
  end 

end
