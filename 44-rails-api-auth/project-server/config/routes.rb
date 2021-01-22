Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/register", to: "auth#register"
  post "/login", to: "auth#login"

  get "/profile", to: "users#profile"
end
