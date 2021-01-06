Rails.application.routes.draw do

  get 'admin/index', as: :admin
  resource :session, only: %i(new create destroy)
  resources :categories

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end