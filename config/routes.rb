Rails.application.routes.draw do
  resources :comments
  resources :posts do
    member do
      post 'like'
    end
  end
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # route "/", to: "user#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end