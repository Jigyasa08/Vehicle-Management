const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },

    make: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    noOfTrips: {
      type: String,
      required: true,
    },

    trips: {
      type: Array,
      required: true,
    },

    capacity: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },
    regNo: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
