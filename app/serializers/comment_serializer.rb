class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :comment, :likes, :username
  has_many :comment_replies
  # belongs_to :post
  # belongs_to :user

  def username
    object.user.username
  end
end
