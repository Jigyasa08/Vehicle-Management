const mongoose = require("mongoose");
const data = require("./data/data");
const Vehicle = require("./models/Vehicle");
const connectDB = require("./config/db");

connectDB();
const importData = async () => {
  try {
    await Vehicle.deleteMany();
    await Vehicle.insertMany(data);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Vehicle.deleteMany();
    console.log("data destroyed");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
