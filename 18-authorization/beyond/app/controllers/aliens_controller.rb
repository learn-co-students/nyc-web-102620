class AliensController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def index 
    @aliens = Alien.all
  end 

  def show 
    @alien = Alien.find(params[:id])
      # params[:id]  == cookies[:alien_id]
    if @alien == @current_alien
      render :show
    else
       redirect_to aliens_path 
       flash[:error] = 'Can only see your own profile silly alien'
    end 

  end 

  def new
    @alien = Alien.new
  end 

  def create 
    alien = Alien.create(alien_params)

    if alien.valid?
      cookies[:alien_id] = alien.id
      redirect_to aliens_path
    else
      flash[:errors] = alien.errors.full_messages
      redirect_to new_alien_path 
    end 
  end 

private 

  def alien_params 
    params.require(:alien).permit(:name, :user_name, :age, :abduction_count, :password, :img_url)
  end 

end
