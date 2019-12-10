Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles do
    member do
      post 'add_article'
      delete 'remove_article'
    end
  end
end
