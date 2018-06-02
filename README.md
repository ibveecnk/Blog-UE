# Blog

-Node.js + Express.js-
created by MP and IB

Requirements:
  - MongoDB `For saving Posts, Authors, Comments and Categories`
  - git `For being able to clone`
  - Nodemon `Not necessary but recommended For easier development`

Launch using the command `nodemon` or if not installed `npm start` in the root directory of the project. 
By default, the Server runs on `localhost:3001`. 
Set the IP of your mongo database in a file called `localvariables.js` which you have to create yourself in the project root directory. 

`localvariables.js` should contain these two lines:

`var dburl = 'mongodb://IP-OF-MONGODB/ArticleDB';`
`module.exports = dburl;`
