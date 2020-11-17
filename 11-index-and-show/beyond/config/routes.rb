Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/planets', to: 'planets#index'
  get '/planets/:id', to: 'planets#show'

end
