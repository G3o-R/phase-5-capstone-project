class User < ApplicationRecord
    has_secure_password
    has_many :user_posts, class_name: "Post", foreign_key: "user_id"
    has_many :comments
    has_many :comment_replies
  
    validates :email, presence: true, uniqueness: { message: "An account with this email already exists" }, format: { with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/ }
    validates :username, presence: true, uniqueness: true
    validates :password_digest, length: { minimum: 8, message: "Password must be at least 8 characters long" }# ,
                            #    format: {
                            #      with: /\A(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+\z/,
                            #      message: ->(object, data) do
                            #        errors = []
                            #        errors << "require an uppercase letter" unless data =~ /[A-Z]/
                            #        errors << "require a digit" unless data =~ /\d/
                            #        errors << "require a special character (@$!%*?&)" unless data =~ /[@$!%*?&]/
                            #        errors.join(", ")
                            #      end
                            #    }
                            # I want to implement validations so that a user must include one number, one special character, and one capital
                            # however when trying to seed data as so it doesn't meet thos requirements why
  end
  