#Social Network API
Base url: http://localhost:9000/api/v1
/auth

/login -> Login with the user's credentials to authenticate
/posts

/me -> My own posts
/user/:id -> Posts of particular users
/:id -> A specific post
/:id/comments -> Comments on a specific post
/:id/likes -> The likes of a specific post
/users

/me -> My user information
/:id -> A specific user
/:id/follow
example ecommerce: /product/:id/add-to-cart

/follows

/:id
/followers

/:id
Controllers Posts
 findAllPosts
 findPostById
 createPost
 updatePost
 removePost
Services Posts
 getAllPosts
 getPostById
 postNewPost
 patchPost
 deletePost
