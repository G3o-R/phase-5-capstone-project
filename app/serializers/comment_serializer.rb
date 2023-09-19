class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :comment, :username
  belongs_to :post
  belongs_to :user

  def username
    object.user.username
  end
end
