class User < ApplicationRecord
    has_secure_password
    has_many :user_posts, class_name: "Post", foreign_key: "user_id"
    has_many :comments
    has_many :likes, dependent: :destroy
    has_many :liked_posts, through: :likes, source: :likable, source_type: 'Post'
    has_many :liked_comments, through: :likes, source: :likable, source_type: 'Comment'

    
    validates :password, length: { minimum: 8, message: "must be at least 8 characters long" }
    validates :email, presence: true, uniqueness: { message: "An account with this email already exists" }, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }
    validates :username, presence: true, uniqueness: true
  end
  