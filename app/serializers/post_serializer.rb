class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description,:likes,  :user
  has_many :comments

  def user
    object.user.username
  end

  def likes
    object.likes.length
  end

end
