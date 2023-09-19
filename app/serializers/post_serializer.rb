class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :description, :comments
  belongs_to :user
  has_many :comments
end
