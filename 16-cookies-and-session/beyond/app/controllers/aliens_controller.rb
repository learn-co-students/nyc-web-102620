class AliensController < ApplicationController
  def index 
    @aliens = Alien.all
  end 
end
