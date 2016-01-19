ParallaxRails::Application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = true
  config.active_support.deprecation = :log
  config.assets.debug = true
end
