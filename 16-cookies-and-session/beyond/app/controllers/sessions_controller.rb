class SessionsController < ApplicationController
  def reset_view_count
    # cookies[:view_count] = nil
    cookies.delete(:view_count)
    
    redirect_back fallback_location: planets_path
  end 

end
