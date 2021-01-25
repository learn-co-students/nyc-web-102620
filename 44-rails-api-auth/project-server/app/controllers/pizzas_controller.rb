class PizzasController < ApplicationController
  before_action :authorize

  def index
    render json: @user.pizzas
  end

end
