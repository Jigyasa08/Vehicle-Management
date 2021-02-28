import { Paper } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import { VehicleDetails } from "../Components/VehicleDetails";
import { Login } from "../Components/Login/Login";

export const Routes = () => {
  return (
    <Paper
      elevation={5}
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "30px",
        marginTop: "100px",
      }}
    >
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/vehicles"
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          exact
          path="/vehicles/:id"
          render={(props) => <VehicleDetails {...props} />}
        />
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </Paper>
  );
};
