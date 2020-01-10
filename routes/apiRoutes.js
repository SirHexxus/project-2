const db = require("../models");

module.exports = app => {

  // Create a new client, measurement sheet
  app.post("/api/NewMeasurement", (req, res) => {
    db.Measurement.create(req.body).then(dbProj => {
      res.json(dbProj);
    });
  });

  //  Should this be a res.render?  -James
  //get the measurements for 1 client
  app.get("/api/measurement/:id", (req, res) => {
    db.Measurement.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //Get user profile info by id
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //Get all client measurements for the user
  app.get("/api/measurements/:id", (req, res) => {
    db.User.findAll({
      include: [{
        model: db.Measurement,
        where: {
          UserId: req.params.id
        }
      }]
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //  Should this be a res.render?  -James
  //Get route to view single project
  app.get("/api/projects/:id", (req, res) => {
    db.Measurement.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  // Delete a project by id
  app.delete("/api/projects/:id", (req, res) => {
    db.Measurement.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  // update a project by id
  app.put("/api/projects/:id", (req, res) => {
    db.Measurement.update(req.body, { where: { id: req.params.id } }).then(
      dbProj => {
        res.json(dbProj);
      }
    );
  });
};
