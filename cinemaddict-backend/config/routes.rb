Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      delete '/logout', to: 'auth#destroy'
      get '/profile/:id', to: 'users#show'

      # resources :auth, only: [:destroy]

      resources :reviews, only: [:index, :create, :show, :new, :update, :edit, :destroy]

      resources :movies, only: [:index, :create, :show, :new, :update, :edit, :destroy]

    end
  end
end
