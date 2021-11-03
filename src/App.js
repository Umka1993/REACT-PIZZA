import React from "react";
import {Header} from "./components/";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from "axios";
import {setPizzas} from './redux/action/pizzas'
import {connect} from "react-redux";


// function App() {
//
//
//
//     React.useEffect( ()=> {
//         axios.get('http://localhost:3000/db.json').then( ({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, [])
//
//
//     return (
//         <div className="wrapper">
//             <Header/>
//
//
//             <div className="content">
//                 <Route exact path='/' render={ ()=> <Home items={pizzas}/>}/>
//                 <Route exact path='/cart' component={Cart}/>
//
//             </div>
//         </div>
//     )
// }

class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then( ({data}) => {
            this.props.setPizzas(data.pizzas)
            console.log(setPizzas(data.pizzas))
        })
    }

    render() {
        console.log(this.props.filters)
        return (
            <div className="wrapper">
                <Header/>


                <div className="content">
                    <Route exact path='/' render={ ()=> <Home items={this.props.items}/>}/>
                    <Route exact path='/cart' component={Cart}/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       items: state.pizzas.items,
       filters: state.filters

    }
}
const mapDispatchToProps = dispatch => {
  return {
      setPizzas: (items) => dispatch(setPizzas(items)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
