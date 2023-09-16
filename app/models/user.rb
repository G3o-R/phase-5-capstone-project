class User < ApplicationRecord
    has_secure_password
  
    has_many :posts
    has_many :comments, through: :posts
  
    validates :email, presence: true, uniqueness: { message: "An account with this email already exists" }, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }
    validates :user_name, presence: true, uniqueness: true
    validates :password_digest, length: { minimum: 8 }, format: { with: /\A(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+\z/ }
  end
  