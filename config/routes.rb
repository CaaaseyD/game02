Rails.application.routes.draw do
  root to: "games#new"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :games, only: [:show, :index, :new, :create] do
    resources :players, only: [:show, :index, :update, :create]
  end
end
