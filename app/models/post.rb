class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes, as: :likable, dependent: :destroy

  validates :user_id, presence: true
  validates :image, presence: true
end