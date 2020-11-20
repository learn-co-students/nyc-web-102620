class PlanetsController < ApplicationController
  def index 
    @planets = Planet.all
    # render :index
  end 


  def new
    @planet = Planet.new
    
    # render :new
  end

  def create
    @planet = Planet.create!(planet_params)

    redirect_to planet_path(@planet)
  end
  
  def show 
    @planet = Planet.find(params[:id])
    
    # render :show
  end 
  
  def edit 
    @planet = Planet.find(params[:id])
    
    # render :edit
  end 
  
  def update 
    @planet = Planet.find(params[:id])
    @planet.update(planet_params)
    
    redirect_to planet_path(@planet)
  end 
  
  
  def destroy 
    @planet = Planet.find(params[:id])
    @planet.destroy 

    redirect_to planets_path
  end 

  private

  def planet_params
    params.require(:planet).permit(:name, :size)
  end

end
