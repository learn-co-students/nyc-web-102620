Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/planets', to: 'planets#index', as: 'planets'
  # get '/planets/:id', to: 'planets#show', as: 'planet'

  resources :planets, only: [:index, :show, :new, :create]
end
