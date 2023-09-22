class CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]
    # don't forget to delete index method in comments controller users
    # can read comments as nested data for posts
    # same for comment_replies
    def index
        render json: Comment.all
    end

    def create 
        # comment = User.comments.create!(comment_params)
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def comment_params
        # don't forget to delete :user_id from prarams this is just for postman
        params.permit(:post_id, :comment, :user_id)
    end
end
