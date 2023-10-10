class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :comment, :likes, :username, :users_liked

  def username
    object.user.username
  end

  def likes 
    object.likes.length
  end
  def users_liked
    object.likes.map { |like| like.user.username }
  end
end
