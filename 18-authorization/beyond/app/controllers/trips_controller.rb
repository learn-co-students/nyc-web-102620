class TripsController < ApplicationController
  def new 
    @trip = Trip.new

    @planets = Planet.all
    @aliens = Alien.all
    # render :new
  end


  def create 
    trip = @current_alien.trips << Trip.create(trip_params)


    redirect_to planet_path(params[:trip][:planet_id])
    # redirect_to planet_path(trip.last.planet)
  end 

  private 

  def trip_params
    params.require(:trip).permit(:reason, :length, :planet_id)
  end 

end
