class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def index
        posts = Post.all.shuffle
        # need to work on getting comment replies 
        render json: posts #, ['comments', 'comments.comment_replies']
    end

    def update 
        post = @current_user.posts.find(params[:id])
        post.update!(post_params)
        render json: post
    end

    def destroy
        post = @current_user.posts.find(params[:id])
        post.destroy
        head :no_content
    end

    private 

    def post_params
        params.permit(:image, :description)
    end
end
