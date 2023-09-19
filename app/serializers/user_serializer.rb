class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :posts
  has_many :posts
  has_many :comment_replies
end
