class ApplicationController < ActionController::API

  def authorize
    # Auth with token
    @user = AuthorizeRequest.new(request.headers).user
    
    # Fake auth
    # @user = User.first

    
    unless @user
      render json: { error: "Unauthorized request" }, status: :unauthorized
    end
    # continue to the rest of the action
  end

end
