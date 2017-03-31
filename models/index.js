'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');

// This file name `index.js`
var basename  = path.basename(module.filename);

// Get environment
var env       = process.env.NODE_ENV || 'development';

// Get config object
var config    = require(__dirname + '/../config/config.json')[env];

// Set db namespace
var db        = {};

// User env variable if set to use env
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {

  // Else load config file
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs
  // Read this `models/` directory
  .readdirSync(__dirname)

  // Filter out hidden files,
  // this file `index.js`
  // and any non JS file
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })

  // Import the model and set
  // that model in the namespace
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Set up associations
Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Set references to sequelize
// instance and class
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;











