class ScoresController < ApplicationController
  def win
    @score = Score.new(user_id: params[:user_id], completeness: params[:completeness], turns_taken: params[:turns_taken])
    if @score.save
      session[:score] = @score.completeness
    end
  end
end
