class SessionsController < ApplicationController
  def reset_view_count
    # cookies[:view_count] = nil
    cookies.delete(:view_count)
    
    redirect_back fallback_location: planets_path
  end 

  def logout
    cookies.delete(:alien_id)
    redirect_to new_alien_path
  end 

  def new 
  end 

  def login
    alien = Alien.find_by(user_name: params[:session][:user_name])

    if alien && alien.authenticate(params[:session][:password])
      cookies[:alien_id] = alien.id
      redirect_to aliens_path
    else
      flash[:errors] = "Username or Password does not match" 
      redirect_to new_login_path
    end 
  end 

end
