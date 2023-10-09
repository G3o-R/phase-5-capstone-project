class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description,:likes,  :user
  has_many :comments
  has_many :likes, as: :likable, dependent: :destroy

  def user
    object.user.username
  end

end
