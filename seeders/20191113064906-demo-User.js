"use strict";

// let Sequelize = require("sequelize");
const faker = require("faker");

let data = [];

for (var i = 0; i < 11; i++) {
  let newUser = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    wantsUpdates: faker.random.boolean(),
    createdAt: faker.date.between("2014-01-01", "2019-11-01"),
    updatedAt: faker.date.recent(10)
  };
  data.push(newUser);
}

console.log(data);

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
