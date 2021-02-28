import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
// import { loadData } from "../../../Redux/localStorage";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    maxWidth: 500,
  },
  media: {
    margin: "auto",
    height: 150,
    width: 200,
  },
});

export const VehicleDetails = (props) => {
  const classes = useStyles();
  const vehicles = useSelector((state) => state.vehicleData.data);

  const { id } = props.match.params;

  var data = vehicles && vehicles.filter((item) => item.id == id);
  var vehicle = data[0];
  console.log(vehicle);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={vehicle.avatar} />
        <CardContent>
          <Typography variant="h4">
            {vehicle.make} {vehicle.model}
          </Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="h6">Trip Details</Typography>
          <Divider variant="middle" />

          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "700" }}>From City</TableCell>
                <TableCell align="right" style={{ fontWeight: "700" }}>
                  To City
                </TableCell>
                <TableCell align="right" style={{ fontWeight: "700" }}>
                  No of Person
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicle.trips.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.from}
                  </TableCell>
                  <TableCell align="right">{row.to}</TableCell>
                  <TableCell align="right">{row.noOfPerson}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </CardActionArea>
      <Divider />
    </Card>
  );
};
