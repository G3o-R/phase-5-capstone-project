class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        posts = Post.all
        render json: posts
    end
end
