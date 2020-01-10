//const db = require("../models");
const path = require("path");

module.exports = app => {
  // Load Landing Page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load Register page
  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Load Login page
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //load users measurements page
  app.get("/account", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  });

  // View create new page
  /* app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/makeNew.html"));
  }); */

  // Render 404 page for any unmatched routes
  /* app.get("*", (req, res) => {
    res.render("404");
  }); */
};
