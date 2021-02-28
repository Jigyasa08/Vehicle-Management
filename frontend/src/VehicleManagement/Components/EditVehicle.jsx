import { Typography, Divider, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export const EditVehicle = ({ vehicles, editId }) => {
  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setVehicle((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const history = useHistory();
  console.log("-----data-----------", vehicles, editId);
  var data = vehicles && vehicles.filter((item) => item._id == editId);
  console.log(data);
  const [vehicle, setVehicle] = useState(data[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vehicle);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/vehicles/update/${editId}`,
      data: vehicle,
    });

    history.push("/vehicles");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4">
          {vehicle.make} {vehicle.model}
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography variant="h6">Trip Update</Typography>
        <Divider variant="middle" />
        <form onSubmit={handleSubmit}>
          <TextField
            value={vehicle.noOfTrips}
            name="noOfTrips"
            onChange={handleChange}
            label="Enter No of Trips"
            variant="outlined"
          />

          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    </>
  );
};
