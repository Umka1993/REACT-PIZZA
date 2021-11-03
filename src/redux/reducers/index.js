import {combineReducers} from "redux";
import filtersReducer from "./filters";
import pizzasReducers from "./pizzas";


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducers
})


export default rootReducer