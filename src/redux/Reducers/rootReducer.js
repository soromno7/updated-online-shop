import { combineReducers } from "redux";
import filtersReducer from "./filters.js";
import pizzasReducer from "./pizzas";

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

export default rootReducer;