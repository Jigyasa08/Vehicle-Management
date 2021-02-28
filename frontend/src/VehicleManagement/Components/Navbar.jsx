import { AppBar, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("Navbar", isAuth);
  const handleLogout = () => {
    history.push("/");
    window.location.reload(false);
  };
  return (
    <div>
      <AppBar position="fixed">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <NavLink
            to="/vehicles"
            activeStyle={{ color: "red" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography> Vehicle Details</Typography>
          </NavLink>
          <NavLink
            to="/"
            activeStyle={{ color: "red" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography onClick={handleLogout}>
              {isAuth ? "LOGOUT" : "LOGIN"}
            </Typography>
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
};
