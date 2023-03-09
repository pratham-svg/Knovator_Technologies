# Knovator_Technologies
Knovator_Technologies Practical Interview Task

## Blogging Site Backend

### Requirements
Node.js  
MongoDB 

### Postman Collection 
To check all the api's use this Postman Collection
G-Drive Link :-  https://drive.google.com/drive/folders/1T-Ul7uqJFHdJPgcS44_weBomHkE_CShQ?usp=share_link

### Installation
Clone the repository: git clone https://github.com/pratham-svg/Knovator_Technologies.git
Install dependencies: npm install
Set environment variables in a .env file at the root of the project:

makefile

PORT=3000

MONGODB_URl = 'mongodb+srv://Pratham_Panchariya:shree79766@cluster0.yd3rrae.mongodb.net/knovator_technologies'

Start the server: npx nodemon src

## Features

This backend provides the following features:

User Authentication (using JWT)    
User registration   
User login   
Blog post management (create, read, update and delete)

## API Routes

### Authentication

POST /api/auth/register: Register a new user. Expects a request   body with the following fields:   
name: User's full name.   
email: User's email address.   
password: User's password.  

POST /api/auth/login: Login an existing user. Expects a request body with the following fields:  
email: User's email address.  
password: User's password.  

### Blog Posts

GET /api/posts: Get all blog posts.

GET /api/posts/:id: Get a specific blog post by its ID.  

POST /api/posts: Create a new blog post. Expects a request body   with the following fields:   
title: Title of the blog post.   
content: Content of the blog post.   

PUT /api/posts/:id: Update a blog post. Expects a request body   with the following fields:   
title: Title of the blog post.   
content: Content of the blog post.   
 
DELETE /api/posts/:id: Delete a blog post.

GET /api/ActivePost: Get Total Number Of Post Available.


