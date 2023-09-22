class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :likes, :description, :user, :comments
  # has_many :comments
  
  def user
    object.user.username
  end

end
