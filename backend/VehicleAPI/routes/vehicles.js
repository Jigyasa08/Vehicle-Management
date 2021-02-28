const express = require("express");
const router = express.Router();
const {
  getVehicle,
  deleteVehicle,
  editVehicle,
} = require("../controllers/vehicle-controller");

router.get("/vehicles", getVehicle);
router.delete("/vehicles/:id", deleteVehicle);
router.post("/vehicles/update/:id", editVehicle);

module.exports = router;
