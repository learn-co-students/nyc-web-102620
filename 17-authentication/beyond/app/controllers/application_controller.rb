class ApplicationController < ActionController::Base
  before_action :find_current_alien

  def find_current_alien
    # @current_alien = Alien.find(cookies[:alien_id])
    @current_alien = Alien.find_by(id: cookies[:alien_id])
  end 

end
