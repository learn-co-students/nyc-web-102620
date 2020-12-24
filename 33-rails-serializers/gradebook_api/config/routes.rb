Rails.application.routes.draw do
  get "/teachers", to: "teachers#index"
  get "/teachers/:id", to: "teachers#show"

  post "/please_log_me_in", to: "teachers#please_log_me_in"
end
