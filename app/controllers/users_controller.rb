class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index 
        # need to know how to alias comments so that comments made by user as seperate from comments that belong to user through posts
        render json: User.all, include: ['posts','posts.comments']
    end

    def show
        render json: @current_user, include: ['posts','posts.comments']
    end

    def update
        updated_username = @current_user.update!(params.permit(:username))
        render json: updated_username
    end

    private 

    def user_params
        params.permit(:username, :email, :password_confirmation)
    end
end
