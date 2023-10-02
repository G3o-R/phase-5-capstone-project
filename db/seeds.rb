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
    email: 'fakeemail@gmail.com',
    biography: '"No this is Patrick"-The Krusty Krab'
  })

  user2 = User.create!({
    username: 'User2',
    password_digest: BCrypt::Password.create('12345678'),
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

  g3or.user_posts.create!([
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

  user2.user_posts.create!([
    {
      image: "https://preview.redd.it/r7lp86ibwsrb1.jpg?width=640&crop=smart&auto=webp&s=4665d1e2c572ddc5ee6275a50386b36c658510f8",
      description: "This is my first post"
    },
    {
      image: "https://i.redd.it/erm0opn5tsrb1.jpg",
      description: "Enjoying the view"
    }
  ])
  
  user3.user_posts.create!([
    {
      image: "https://preview.redd.it/kfron8v6kqrb1.jpg?width=640&crop=smart&auto=webp&s=1337f39de12102ff5723c9cc85f05083acaa49d0",
      description: "Just a random picture"
    }
  ])
  
  user4.user_posts.create!([
    {
      image: "https://preview.redd.it/3weoem56zorb1.png?width=640&crop=smart&auto=webp&s=9556f70f5ee15b26ed543ae9c3cf191fd01eb256",
      description: "Nature at its best"
    },
    {
      image: "https://preview.redd.it/yqsde6bubprb1.png?width=640&crop=smart&auto=webp&s=17e060f9347e4d56f9624caaaa9c32ae31c63e10",
      description: "Sunset vibes"
    }
  ])
  
  user5.user_posts.create!([
    {
      image: "https://preview.redd.it/gzqcy4zahnrb1.png?width=640&crop=smart&auto=webp&s=f394f4534202a2dd082b6499010ca71d26604c83",
      description: "standing desks >>>"
    }
  ])

  g3or.user_posts.each do |post|
    random_user_id = User.pluck(:id).sample
    comment_samples = ["lol", "that's so me!", "oof", "real", "but how does effect the economy?"]
    post.comments.create!(
      user_id: random_user_id,
      comment: comment_samples.sample
    )
  end

  user2.user_posts.each do |post|
    random_user_id = User.pluck(:id).sample
    comment_samples = ["lol", "that's so me!", "oof", "real", "but how does effect the economy?"]
    post.comments.create!(
      user_id: random_user_id,
      comment: comment_samples.sample
    )
  end

  user3.user_posts.each do |post|
    random_user_id = User.pluck(:id).sample
    comment_samples = ["lol", "that's so me!", "oof", "real", "but how does effect the economy?"]
    post.comments.create!(
      user_id: random_user_id,
      comment: comment_samples.sample
    )
  end

  user4.user_posts.each do |post|
    random_user_id = User.pluck(:id).sample
    comment_samples = ["lol", "that's so me!", "oof", "real", "but how does effect the economy?"]
    post.comments.create!(
      user_id: random_user_id,
      comment: comment_samples.sample
    )
  end

  user5.user_posts.each do |post|
    random_user_id = User.pluck(:id).sample
    comment_samples = ["lol", "that's so me!", "oof", "real", "but how does effect the economy?"]
    post.comments.create!(
      user_id: random_user_id,
      comment: comment_samples.sample
    )
  end

  

puts "------------------done seeding data"