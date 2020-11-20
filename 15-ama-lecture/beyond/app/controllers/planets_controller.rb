class PlanetsController < ApplicationController
  before_action :find_planet, only: [:show, :edit, :update, :destroy]

  def index 
    @planets = Planet.all
    # render :index
  end 


  def new
    @planet = Planet.new
    
    # render :new
  end

  def create
    planet = Planet.create(planet_params(:name, :size))

    # if planet is valid
      # then redirect to planet path
    # else if planet is not valid
      # then go back to the new page
      # display the error

    if planet.valid?
      redirect_to planet_path(planet)
    else
      # display error
      flash[:my_errors] = planet.errors.full_messages
      redirect_to new_planet_path
    end
    
    
  end
  
  def show 
    # @planet = Planet.find(params[:id])
    
    # render :show
  end 
  
  def edit 
    # @planet = Planet.find(params[:id])
    
    # render :edit
  end 
  
  def update 
    # @planet = Planet.find(params[:id])
    

    if @planet.update(planet_params(:name))
      redirect_to planet_path(planet)
    else
      # display error
      flash[:my_errors] = @planet.errors.full_messages
      redirect_to edit_planet_path(@planet)
    end
    
  end 
  
  
  def destroy 
    # @planet = Planet.find(params[:id])
    @planet.destroy 
    
    redirect_to planets_path
  end 
  
  private
  

  def planet_params(*args)
    params.require(:planet).permit(args)
  end
  
  def find_planet 
    @planet = Planet.find(params[:id])
  end 

end
