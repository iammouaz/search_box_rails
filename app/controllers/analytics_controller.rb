class AnalyticsController < ApplicationController
    before_action :authenticate_user!

    def index
     @tags = Tag.group(:name).count
    end
  end
  