import { combineReducers } from "redux";
import filters from "./filters.js";
import pizzas from "./pizzas";
import cart from "./cart.js";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

export default rootReducer;