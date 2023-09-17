class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post
  has_many :comment_replies

  validates :user_id, presence: :true
  validates :post_id, presence: { message: "Sorry but this post no longer exists" }
  validates :comment, presence: true
end