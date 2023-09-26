Rails.application.routes.draw do
  # resources :comment_replies
  resources :comments
  resources :posts
  resources :users

  post "/login", to: "sessions#create"
  get "/me", to: "users#show"

  # route "/", to: "user#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end