# Photo Caption Contest

This is part of the CodeCademy Backend Engineer Career Path. It is a project to demonstrate the use of Node.js, Express, Sequelize and PostgreSQL to create a REST API for a photo caption contest.

Instructions are as below:
In this project you will create the backend for a platform for users to participate in a photo caption contest. Your server will host a few images and you will create endpoints to authenticate and authorize users. In order for a user to create a caption, they will need to be authenticated (signed in). You will need a database design and schema in order to integrate a database layer to store all your users and captions. You will use PostgreSQL and the ORM, sequelize to communicate between your database and your server. As you create your endpoints you will be testing them on Postman to ensure that they work correctly. Once the server is running, you will use a localized cache to optimize the performance of frequently requested data. Finally, you will write the documentation using Swagger and deploy your project to Render.

Project Objectives:

- Use Git version control
- Create documentation using the Swagger API
- Implement a database
- Integrate existing API endpoints with the database layer
- Database implementation for transactions
- Deploy the application using Render

Prerequisites:

- Command line and file navigation
- Git and GitHub
- Javascript
- Node.js/Express
- Postman
- PostgreSQL
- Database relationships and configuration
- Sequelize
- Render

## Problem

Fulfill the above requirements.

## Getting Started

### Dependencies

- You need Node installed in your environment
- npm packages required: express, sharp, morgan-body, mariadb, sequelize, body-parser, ejs and nodemon (for dev auto-restart)

### Installing

- Just clone the repo or download from this repo
- Copy to a directory in your computer.

#### Set up your .env

Using the [.env.example](./.env.example) file, edit the values of the db connection as you wish, then rename the file as .env.

Ensure you are able to connect to the db.

#### Run the migration

#### Run the seed

#### Run the app

#### Set up postman

### Executing program

- Install all the dependencies as shown above by running commands below

```
npm init -y
```

If any dependency is not installed, you can install as below:

```
- npm install express sharp morgan-body sequelize ejs mariadb body-parser
- npm install --save-dev nodemon
```

Start the application using the normal npm commands:

```
npm run dev
```

## Packages used

- [express](https://www.npmjs.com/package/express) for handling server requests and routing
- [ejs](https://www.npmjs.com/package/ejs) template engine for node to create front-end pages
- [body-parser](https://www.npmjs.com/package/body-parser) enable parsing of requests and responses
- [dotenv](https://www.npmjs.com/package/dotenv) for loading environment variables from .env file
- [sequelize](https://www.npmjs.com/package/sequelize) ORM for handling db CRUD operations
- [morgan-body](https://www.npmjs.com/package/morgan-body) to log requests and responses
- [nodemon](https://www.npmjs.com/package/nodemon) auto-restart the node application when changes are made and saved to files - Dev environment
- [bcrypt](https://www.npmjs.com/package/bcrypt) for hashing passwords and comparing passwords
- [pg](https://www.npmjs.com/package/pg) PostgreSQL client for Node.js

## Improvements

The project needs to improve in the following:

-

## Help

If you get errors when processing, check the following:

-

## Authors

[Munene Ndereba](https://github.com/munenendereba)

## Version History

- 0.0.1

  - Initial release
  - See [commit change]()

## License

This project is licensed under the MIT License.

## References and Acknowledgments

- []()
