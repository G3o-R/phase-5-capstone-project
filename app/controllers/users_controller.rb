class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index 
        render json: User.all, include: ['user_posts','user_posts.comments']
    end

    def showMe
        render json: @current_user, include: ['user_posts','user_posts.comments']
    end

    def show
        user = User.find_by(username: params[:username])
        render json: user, include: ['user_posts','user_posts.comments']
    end

    def update
        updated_username = @current_user.update!(params.permit(:username))
        render json: updated_username
    end

    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
