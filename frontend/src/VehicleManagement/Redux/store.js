import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { vehicleDataReducer } from "../Components/Dashboard/DashboardRedux/reducer";
import { authReducer } from "../Components/Login/AuthRedux/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  vehicleData: vehicleDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
