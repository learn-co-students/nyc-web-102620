class AuthController < ApplicationController
  
  # post /register
  def register
    # create a new user
    register_params = params.permit(:username, :password, :bio, :avatar)
    user = User.create(register_params)
    if user.valid?
      # if the user is authenticated, send back... user object
      secret = Rails.application.secrets.secret_key_base
      # also send back a token that they can use to re-authenticate themselves
      token = JWT.encode({ user_id: user.id }, secret, "HS256")

      render json: { user: UserSerializer.new(user), token: token }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # post "/login"
  def login
    # find user
    user = User.find_by(username: params[:username])
    # authenticate password
    if user && user.authenticate(params[:password])
      # if the user is authenticated, send back... user object
      secret = Rails.application.secrets.secret_key_base
      # also send back a token that they can use to re-authenticate themselves
      token = JWT.encode({ user_id: user.id }, secret, "HS256")

      render json: { user: UserSerializer.new(user), token: token } 
    else
      # if not, send an error
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

end

