import React from "react";
import {Header} from "./components/";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";
import {setPizzas} from "./redux/action/pizzasAC";
import {useDispatch} from "react-redux";


const App = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        debugger
        axios.get('http://localhost:3001/pizzas').then(({data}) => {
            console.log(data)
            dispatch(setPizzas(data.pizzas))
            // console.log(setPizzas(data.pizzas))
        })
    }, [])



    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>

            </div>
        </div>
    )
};

export default App;