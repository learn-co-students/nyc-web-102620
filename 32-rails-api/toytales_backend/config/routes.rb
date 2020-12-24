Rails.application.routes.draw do
  # VERB "/URL", to: "CONTROLLER#METHOD"

  get "/how_many_toys_please", to: "toys#how_many_toys_please"


  get "/toys", to: "toys#index"
  get "/toys/:id", to: "toys#show"
  post "/toys", to: "toys#create"
  patch "/toys/:id", to: "toys#update"
  delete "/toys/:id", to: "toys#destroy"

end
