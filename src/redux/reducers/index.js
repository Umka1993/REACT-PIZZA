import {combineReducers} from "redux";
import filtersReducer from "./filtersReducer";
import pizzasReducers from "./pizzasReducer";


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducers
})


export default rootReducer