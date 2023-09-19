class UsersController < ApplicationController
    def index 
        render json: User.all, include: ['posts','posts.comments']
    end
    def show
        user = User.find(params[:id])
        render json: user, include: ['posts','posts.comments']
    end
end
