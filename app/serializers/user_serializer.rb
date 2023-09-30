class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_posts, :email, :comments
  has_many :user_posts, key: :posts, serializer: PostSerializer
  has_many :comment_replies
  has_many :comments
end
