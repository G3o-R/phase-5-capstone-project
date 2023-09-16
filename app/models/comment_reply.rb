class CommentReply < ApplicationRecord
  belongs_to :user
  belongs_to :comment
end