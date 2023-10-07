class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_posts, :email, :comments, :biography
  has_many :user_posts, key: :posts, serializer: PostSerializer
  has_many :comments
end
