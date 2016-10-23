Rails.application.routes.draw do
  # get 'login'  => 'users#new'
  resources :users

  root 'games#index'

  get 'profile' => 'users#profile'

  get 'game' => 'games#index'

  get 'leaderboard' => 'games#leaderboard'

  get 'login' => 'sessions#new'

  post 'login' => 'sessions#create'

  delete 'login' => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :games
end
