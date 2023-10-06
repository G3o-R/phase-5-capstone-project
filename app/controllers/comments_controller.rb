class CommentsController < ApplicationController
    # don't forget to delete index method in comments controller users
    # can read comments as nested data for posts
    # same for comment_replies
    def index
        render json: Comment.all
    end

    def create 
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = @current_user.comments.update!(comment_params)
        render json: comment
    end

    def destroy 
        comment = @current_user.comments.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        # don't forget to delete :user_id from prarams this is just for postman
        params.permit(:post_id, :comment)
    end
end
