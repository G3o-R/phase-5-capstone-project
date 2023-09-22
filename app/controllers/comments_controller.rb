class CommentsController < ApplicationController
    skip_before_action :authorize, only: :index
    # don't forget to delete index method in comments controller users
    # can read comments as nested data for posts
    # same for comment_replies
    def index
        render json: Comment.all
    end
end
