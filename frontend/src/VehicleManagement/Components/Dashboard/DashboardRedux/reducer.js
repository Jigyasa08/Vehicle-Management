import {
  VEHICLE_DATA_GET_REQUEST,
  VEHICLE_DATA_GET_SUCCESS,
  VEHICLE_DATA_GET_FAILURE,
  VEHICLE_DATA_DELETE_REQUEST,
  VEHICLE_DATA_DELETE_SUCCESS,
  VEHICLE_DATA_DELETE_FAILURE,
} from "./actionTypes";

const initState = {
  isLoading: false,
  error: false,
  data: [],
};

export const vehicleDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case VEHICLE_DATA_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case VEHICLE_DATA_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: payload,
      };
    }

    case VEHICLE_DATA_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    case VEHICLE_DATA_DELETE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }

    case VEHICLE_DATA_DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    }

    case VEHICLE_DATA_DELETE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
