const bcrypt = require("bcrypt");
const role = require("../authorization/role");

const users = {
  "aa@dd.com": {
    pwHash: bcrypt.hashSync("password", 10),
    roles: [role.ADMIN_ROLE],
    id: "41c514f4-7288-4199-80c0-e0be7e4353d7",
  },
  "bb@dd.com": {
    pwHash: bcrypt.hashSync("password", 10),
    roles: [role.USERS_ROLE],
    id: "fa54f8ac-6ed7-49d5-b242-64b793da816a",
  },
};

// this call would be async and would return a promise
// if we were to use a real database
async function findUserByEmail(email) {
  const user = users[email];
  return user ? user : Promise.reject("user not found");
}

module.exports = { findUserByEmail };
