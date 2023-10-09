class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :comment, :likes, :username
  # belongs_to :post
  # belongs_to :user

  def username
    object.user.username
  end

  def likes 
    object.likes.length
  end
end
