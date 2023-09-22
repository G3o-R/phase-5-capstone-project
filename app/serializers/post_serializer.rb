class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :description, :user
  has_many :comments
  
  def user
    object.user.username
  end

end
