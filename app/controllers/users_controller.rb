class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def index 
        render json: User.all, include: ['posts','posts.comments']
    end
    def show
        user = User.find(params[:id])
        render json: user, include: ['posts','posts.comments']
    end

    private 

    def user_params
        params.permit(:username, :email, :password_confirmation)
    end
end
