class GamesController < ApplicationController
  before_action :require_user, only: [:index, :show]

  def index
    @user = User.find(session[:user_id])
  end

  def leaderboard
    @users = User.all
  end

  def score
    @users = User.all
    @scores = Score.where(user_id: params[:user_id])
  end
end
