require 'bcrypt'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "------------------seeding data"

  # Create users
  g3or = User.create!({
    username: 'G3o-R',
    password_digest: BCrypt::Password.create('0mgChipotle!'), 
    email: 'fakeemail@gmail.com'
  })

  user2 = User.create!({
    username: 'User2',
    password_digest: BCrypt::Password.create('S3cur3P@ss'),
    email: 'user2@example.com'
  })

  user3 = User.create!({
    username: 'User3',
    password_digest: BCrypt::Password.create('Str0ngP@ss!'),
    email: 'user3@example.com'
  })

  user4 = User.create!({
    username: 'User4',
    password_digest: BCrypt::Password.create('Pa$$w0rd4Me'),
    email: 'user4@example.com'
  })

  user5 = User.create!({
    username: 'User5',
    password_digest: BCrypt::Password.create('SecureP@ss5'),
    email: 'user5@example.com'
  })

  g3or.posts.create([
    {
      image: "https://i.redd.it/n4ajwi0kexob1.jpg",
      description:"mwahahahhahahahahahahha"
    },
    {
      image: "https://preview.redd.it/2irnuowchwob1.png?width=640&crop=smart&auto=webp&s=499e9687ce354595b3b1c10e55fa442a5419c17c",
      description:"lol same"
    },
    {
      image: "https://preview.redd.it/8w0qm2ptp0pb1.png?width=640&crop=smart&auto=webp&s=432c6d066f4950d50288873c790d50e4a08db49a",
      description:"The shade is real"
    },
    {
      image: "https://i.redd.it/eo8vyzjns0pb1.jpg",
      description:"another endangered species"
    },
  ])

  user2.posts.create([
    {
      image: "https://example.com/image1.jpg",
      description: "This is my first post"
    },
    {
      image: "https://example.com/image2.jpg",
      description: "Enjoying the view"
    }
  ])
  
  user3.posts.create([
    {
      image: "https://example.com/image3.jpg",
      description: "Just a random picture"
    }
  ])
  
  user4.posts.create([
    {
      image: "https://example.com/image4.jpg",
      description: "Nature at its best"
    },
    {
      image: "https://example.com/image5.jpg",
      description: "Sunset vibes"
    }
  ])
  
  user5.posts.create([
    {
      image: "https://example.com/image6.jpg",
      description: "Travel memories"
    }
  ])

puts "------------------done seeding data"