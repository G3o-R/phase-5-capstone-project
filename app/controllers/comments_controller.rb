class CommentsController < ApplicationController
    def create 
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy 
        comment = @current_user.comments.find(params[:id])
        comment.destroy
        head :no_content
    end

    def like
        comment = Comment.find(params[:id])
        like = Like.find_by(user: @current_user, likable: comment)
      
        if like
          like.destroy
          render json: comment, status: :ok
        else
          like = @current_user.likes.create(likable: comment)
          render json: comment, status: :created
        end
    end

    private

    def comment_params
        params.permit(:post_id, :comment)
    end
end
