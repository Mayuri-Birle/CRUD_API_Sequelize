const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('Users', {

  firstName: {
    type: Sequelize.STRING
  },

  lastName: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING
  },


});

module.exports = User;