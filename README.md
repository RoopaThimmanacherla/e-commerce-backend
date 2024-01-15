# Description
* This application was created as part of a UT Full Stack Coding Bootcamp challenge. Given the starter code of a working Express.js API, code was configured to use Sequelize to interact with a MySQL database.

Code syncs Sequelize models to a MySQL database on the server start, includes column definitions for all four models and model associations, and provides the following GET, POST, PUT, and DELETE routes:

## Category
* GET all categories, GET a single category by ID, POST(create) a new category, PUT(update) and existing category by ID, and DELETE an existing category by ID.

## Tag

* GET all tags, GET a single tag by ID, POST(create) a new tag, PUT(update) an existing tag by ID, and DELETE an existing tag by ID.

## Product (including ProductTag)
* GET all products, GET products by ID, and DELETE products by ID. POST(create) and PUT(update) product routes were provided in starter code.

* Watch (video)[https://drive.google.com/file/d/1TzRV1ZoChC8lf9vxIX5F3B-s67bIddpy/view?usp=sharing] to see application set-up in VSCode and demonstration all API routes' endpoints using Insomnia:


# Installation
* Check if you have Node.js installed by typing node -v in your command line. If node is not installed, visit the Node.js website to install.
* Next, clone this project repository to your computer.
* Use the command npm i to install dependencies.
* Create a file in the root directory titled .env and include database name and personal MySQL login information:

DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PW='YOUR PASSWORD'

* Open MySQL with command mysql -u root -p and enter your personal MySQL password.

* Create databse with command source schema.sql. Log out of MySQL with command \q.

* Seed database with command npm run seed.

# Usage

* Start server with command npm start.

* Alternatively, start server with Nodemon (and restart server automatically when making changes to code) with command npm run watch.

* Access API routes with Insomnia using the following endpoints:

* GET (ALL), POST(CREATE)

* http://localhost:3001/api/categories/
* http://localhost:3001/api/tags/
* http://localhost:3001/api/products/

* GET (BY ID), PUT(UPDATE), DELETE

* http://localhost:3001/api/categories/:id
* http://localhost:3001/api/tags/:id
* http://localhost:3001/api/products/:id


* [Link to my github profile](https://github.com/RoopaThimmanacherla/e-commerce-backend)







