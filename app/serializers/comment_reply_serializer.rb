class CommentReplySerializer < ActiveModel::Serializer
  attributes :id, :comment_id, :user_id, :reply, :likes
  belongs_to :user
  belongs_to :comment

end
