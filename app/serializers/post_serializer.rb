class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :likes, :user, :users_liked
  has_many :comments, serializer: CommentSerializer

  def user
    object.user.username
  end

  def likes
    object.likes.length
  end

  def users_liked
    object.likes.map { |like| like.user.username }
  end
end
