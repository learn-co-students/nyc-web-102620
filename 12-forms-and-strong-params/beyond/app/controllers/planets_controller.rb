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

  private

  def planet_params
    params.require(:planet).permit(:name, :size)
  end

end
