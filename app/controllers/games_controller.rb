class GamesController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def index
    @user = User.find(session[:user_id])
  end

  def leaderboard
    @users = User.all
  end
end
