Rails.application.routes.draw do

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'api/v1/sessions',
    registrations: 'api/v1/registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show]
      resources :events, only: [:index, :show, :create]
      resources :event_attendings, only: [:create]
      # resources :sessions, only: [:create, :destroy]
    end
  end

  root to: "home#index"
  # handle routing for React Router components without interfering with Rails Routes
  get '*path', to: 'home#index', via: :all
end
