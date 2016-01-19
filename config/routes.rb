ParallaxRails::Application.routes.draw do
  resources :demos do
    collection do
      get 'joy'
      get 'isite'
    end
  end
  root 'demos#joy'
end
