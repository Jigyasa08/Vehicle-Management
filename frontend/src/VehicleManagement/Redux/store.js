import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { vehicleDataReducer } from "../Components/Dashboard/DashboardRedux/reducer";
import { loginReducer } from "../Components/Login/LoginRedux/reducer";

const rootReducer = combineReducers({
  auth: loginReducer,
  vehicleData: vehicleDataReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
