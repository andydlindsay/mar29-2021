Rails.application.routes.draw do
  resources :fusion_forms
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :planets

  # resources :characters

  resources :planets do
    resources :characters
  end
end
