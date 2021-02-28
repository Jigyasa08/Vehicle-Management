const Vehicle = require("../models/Vehicle");

const getVehicle = (req, res) => {
  Vehicle.find()
    .then((vehicles) => {
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = {};
      if (endIndex < vehicles.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (startIndex > 0) {
        results.prev = {
          page: page - 1,
          limit: limit,
        };
      }
      results.current = vehicles.slice(startIndex, endIndex);
      res.json(results);

      // res.json(vehicles);
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteVehicle = (req, res) => {
  Vehicle.findByIdAndDelete(req.params.id)
    .then(() => res.json("Vehicle Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const editVehicle = (req, res) => {
  Vehicle.findById(req.params.id)
    .then((vehicle) => {
      vehicle.id = req.body.id;
      vehicle.avatar = req.body.avatar;
      vehicle.make = req.body.make;
      vehicle.model = req.body.model;
      vehicle.noOfTrips = req.body.noOfTrips;
      vehicle.trips = req.body.trips;
      vehicle.capacity = req.body.capacity;
      vehicle.type = req.body.type;
      vehicle.regNo = req.body.regNo;

      vehicle
        .save()
        .then(() => res.json("Vehicle updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getVehicle, deleteVehicle, editVehicle };
