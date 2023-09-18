class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :post
end
