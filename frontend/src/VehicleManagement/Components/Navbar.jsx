import { AppBar, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logoutOperatorData } from "./Login/AuthRedux/action";

export const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("Navbar", isAuth);
  const handleLogout = () => {
    dispatch(logoutOperatorData());
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
          {isAuth ? (
            // <NavLink
            //   to="/"
            //   activeStyle={{ color: "red" }}
            //   style={{
            //     color: "white",
            //     textDecoration: "none",
            //     fontSize: "18px",
            //   }}
            // >
            // </NavLink>
            <Typography onClick={handleLogout}>LOGOUT</Typography>
          ) : (
            <NavLink
              to="/"
              activeStyle={{ color: "red" }}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </AppBar>
    </div>
  );
};
