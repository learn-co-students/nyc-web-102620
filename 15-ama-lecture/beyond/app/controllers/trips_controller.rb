class TripsController < ApplicationController
  def new 
    @trip = Trip.new

    @planets = Planet.all
    @aliens = Alien.all
    # render :new
  end


  def create 
    byebug
    trip = Trip.create(trip_params)

    redirect_to planet_path(trip.planet)
  end 

  private 

  def trip_params
    params.require(:trip).permit(:reason, :length, :alien_name, :planet_id)
  end 

end
