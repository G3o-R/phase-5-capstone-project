# Phase-4-Project

## Installation
To get started, follow these steps to install the necessary dependencies:

1. **Ruby on Rails Backend**: 
   - Open your terminal.
   - Navigate to the root directory of the project.
   - Run `bundle install` to install Ruby gem dependencies.

2. **React Frontend**: 
   - In the project's root directory, navigate to the "client" directory.
   - Run `npm install --prefix client` to install JavaScript dependencies.

3. or instead you could go to this [link](https://phase-5-capstone-project.onrender.com) to see the project

## General Information

The database for this project consists of four models: **Comments**, **Likes**, **Posts**, **Users**. Here's a brief overview of the relationships and capabilities of these models:

- **Posts Model**: This represents a one-to-many relationship. Users can create multiple posts, and each post belongs to a single user. It has full CRUD (Create, Read, Update, Delete) capability.

- **Likes and Comments Models**: These serve as many-to-many relationships. Users can create, read, and delete likes and comments. The "likes" model uses polymorphism to associate with both posts and comments. Although there's potential for users to have many posts and comments through likes, this feature is under development in a separate branch.

## Technologies Used

The project was built using the following technologies:

- Ruby on Rails
- PostgreSQL
- React
- Redux
