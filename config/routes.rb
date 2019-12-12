Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles do
    member do
      patch 'edit_title'
      patch 'edit_detail'
      patch 'forward'
      patch 'backward'
      post 'save_article', defaults: {format:'json'}
      delete 'remove_article'
    end
  end
end
