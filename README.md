CRUD API  using Sequelize 

Building a CRUD API using node.js, express,postgres and sequelize

Getting Started

Before procceding further we must have following things installed and setup

  1. Install Nodejs >= 12.x - Nodejs
  2. Install Postgres >= 10.13 - Postgres
  3. Install Git - Git

Prerequisites

These uses following technologies or frameworks.

  1. Nodejs/Express
  2. Postgresql
  3. Sequelize

Installation

1. Clone the repo

    https://github.com/Mayuri-Birle/CRUD_API_Sequelize.git

2. Change the directory, get into CRUD_API_Sequelize dir

    cd CRUD_API_Sequelize

3. Change the directory, and get into db directory in root directory

    cd src
    
    cd db

4. Now create a database by running 

    npx sequelize db:create

5. Now create a table by running the command

    npx sequelize db:migrate

6. Now you can start development server

    npm run dev




