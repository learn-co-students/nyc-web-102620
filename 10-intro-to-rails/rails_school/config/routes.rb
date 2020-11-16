Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get('/students', { to: 'students#index' })
  # a route is a combination of a path and an HTTP request type
  get '/students', to: 'students#index' 
end
