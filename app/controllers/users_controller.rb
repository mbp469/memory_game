class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/games'
    else
      redirect_to '/login'
    end
  end

  def profile
  end

  def edit
    @user = User.find(params[:id])
  end
<<<<<<< HEAD
=======

  def update
  end
>>>>>>> 3d828eaf6fa48b6c58b8e9a7b616ece9cec2238e

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
