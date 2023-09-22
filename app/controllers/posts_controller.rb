class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def index
        posts = Post.all
        render json: posts #, ['comments', 'comments.comment_replies']
    end

    private 

    def post_params
        params.permit(:image, :description)
    end
end
