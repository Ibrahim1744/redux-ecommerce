import { createStore } from "redux";
import { AllReducers } from "./reducers/CombineReducers";

const store=createStore(AllReducers);
export default store;