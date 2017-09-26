Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create] do
      resources :reservations, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :restaurants, except: [:new, :edit] do
      resources :reservations, only: [:index]
    end

    resources :reservations, except: [:new, :edit]

    resources :reviews, except: [:new, :edit]
  end
end
