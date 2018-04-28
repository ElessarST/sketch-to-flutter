import { routerReducer as routing } from "react-router-redux";
import { combineReducers, Reducer } from "redux";

const rootReducer = combineReducers({
  routing: routing as Reducer<any>,
});

export interface IState {
}

export default rootReducer;
