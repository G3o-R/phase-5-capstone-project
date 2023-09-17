require 'bcrypt'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "------------------seeding data"

user_data = [
    {
      username: 'G3o-R',
      password_digest: BCrypt::Password.create('0mgChipotle!'),  # Hash and store the password
      email: 'fakeemail@gmail.com'
    },
    {
      username: 'User2',
      password_digest: BCrypt::Password.create('S3cur3P@ss'),  # Hash and store the password
      email: 'user2@example.com'
    },
    {
      username: 'User3',
      password_digest: BCrypt::Password.create('Str0ngP@ss!'),  # Hash and store the password
      email: 'user3@example.com'
    },
    {
      username: 'User4',
      password_digest: BCrypt::Password.create('Pa$$w0rd4Me'),  # Hash and store the password
      email: 'user4@example.com'
    },
    {
      username: 'User5',
      password_digest: BCrypt::Password.create('SecureP@ss5'),  # Hash and store the password
      email: 'user5@example.com'
    }
  ]
  
  # Create users
  User.create!(user_data)

puts "------------------done seeding data"