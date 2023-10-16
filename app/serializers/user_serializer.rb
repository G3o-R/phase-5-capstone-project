class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :biography, :user_posts, :email, :comments
  has_many :user_posts, serializer: PostSerializer
  has_many :comments
end
