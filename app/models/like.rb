class Like < ApplicationRecord
  belongs_to :user
  belongs_to :likable, polymorphic: true

  validates :user_id, uniqueness: {scope: :post_id, message: "An error occurred"}
end
