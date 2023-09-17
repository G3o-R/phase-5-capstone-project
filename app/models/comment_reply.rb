class CommentReply < ApplicationRecord
  belongs_to :user
  belongs_to :comment

  validates :comment_id, presence: { message: "Comment no longer exists" }
  validates :user_id, presence: true
  validates :comment, presence: true
end