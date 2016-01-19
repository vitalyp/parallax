class DemosController < ApplicationController

  def joy
    #joy.html.haml
    render layout: 'joy'
  end

  # TODO: rename to 'parallax'
  def isite
    render layout: 'parallax'
  end  

end