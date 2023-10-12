class PostsController < ApplicationController
    # skip_before_action :authorize

    def create
        post = @current_user.user_posts.create!(post_params)
        render json: post, status: :created
    end

    def index
        posts = Post.all.order(created_at: :desc)
        render json: posts
    end

    def update 
        post = @current_user.user_posts.find(params[:id])
        post.update!(post_params)
        render json: post
    end

    def destroy
        post = @current_user.user_posts.find(params[:id])
        post.destroy
        head :no_content
    end

    def like
        post = Post.find(params[:id])
        like = Like.find_by(user: @current_user, likable: post)
      
        if like
          like.destroy
          render json: post, status: :ok
        else
          like = @current_user.likes.create(likable: post)
          render json: post, status: :created
        end
    end
      

    private 

    def post_params
        params.permit(:image, :description)
    end
end
