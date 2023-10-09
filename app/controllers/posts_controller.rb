class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def index
        posts = Post.all
        render json: posts
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

    def like
        post = Post.find(params[:id])
        like = Like.find_by(user: @current_user, likable: post)
      
        if like
          like.destroy
          render json: { message: "You have unliked this post" }, status: :ok
        else
          like = @current_user.likes.create(likable: post)
          render json: like, status: :created
        end
      end
      

    private 

    def post_params
        params.permit(:image, :description)
    end
end
