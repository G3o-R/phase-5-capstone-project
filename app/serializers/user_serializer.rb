class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :posts, :comments
  has_many :posts
  has_many :comment_replies
  has_many :comments
end
