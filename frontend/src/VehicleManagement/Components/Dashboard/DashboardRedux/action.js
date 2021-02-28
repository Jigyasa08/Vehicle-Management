import {
  VEHICLE_DATA_GET_REQUEST,
  VEHICLE_DATA_GET_SUCCESS,
  VEHICLE_DATA_GET_FAILURE,
  VEHICLE_DATA_DELETE_REQUEST,
  VEHICLE_DATA_DELETE_SUCCESS,
  VEHICLE_DATA_DELETE_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const vehicleDataGetRequest = () => {
  return {
    type: VEHICLE_DATA_GET_REQUEST,
  };
};

export const vehicleDataGetSuccess = (payload) => {
  return {
    type: VEHICLE_DATA_GET_SUCCESS,
    payload: payload,
  };
};

export const vehicleDataGetFailure = (payload) => {
  return {
    type: VEHICLE_DATA_GET_FAILURE,
    payload: payload,
  };
};

export const getVehicleData = (page, limit) => (dispatch) => {
  console.log(page, limit);
  dispatch(vehicleDataGetRequest());
  const config = {
    method: "GET",
    url: `http://localhost:5000/api/vehicles?page=${page}&limit=${limit}`,
    //   headers: { "Content-Type": "application/json" },
  };

  axios(config)
    .then((res) => {
      dispatch(vehicleDataGetSuccess(res.data.current));
    })
    .catch((res) => dispatch(vehicleDataGetFailure(res.data)));
};

export const vehicleDataDeleteRequest = () => {
  return {
    type: VEHICLE_DATA_DELETE_REQUEST,
  };
};

export const vehicleDataDeleteSuccess = (payload) => {
  return {
    type: VEHICLE_DATA_DELETE_SUCCESS,
    payload: payload,
  };
};

export const vehicleDataDeleteFailure = (payload) => {
  return {
    type: VEHICLE_DATA_DELETE_FAILURE,
    payload: payload,
  };
};

export const deleteVehicleData = (id) => (dispatch) => {
  dispatch(vehicleDataDeleteRequest());
  const config = {
    method: "DELETE",
    url: `http://localhost:5000/api/vehicles/${id}`,
    //   headers: { "Content-Type": "application/json" },
  };

  axios(config)
    .then((res) => {
      dispatch(vehicleDataDeleteSuccess(res.data));
    })
    .catch((res) => dispatch(vehicleDataDeleteFailure(res.data)));
};
