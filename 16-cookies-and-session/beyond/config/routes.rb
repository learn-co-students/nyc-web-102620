Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get '/planets', to: 'planets#index', as: 'planets'
  # get '/planets/:id', to: 'planets#show', as: 'planet'
  # get '/planets/new', to: 'planets#new', as: 'new_planet'
  # get '/planets/:id/edit, to: 'planets#edit, as: 'edit_planet'
  
  # post '/planets', to: 'planets#create'
  # patch '/planets/:id, to: 'planets#update'
  # delete '/planets/:id', to: 'planets#destroy'
  
  # resources :planets, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :planets
  resources :aliens, only: [:index, :show]
  resources :trips, only: [:new, :create]


  delete "/sessions/reset_view_count", to: 'sessions#reset_view_count', as: 'reset_count'
end
