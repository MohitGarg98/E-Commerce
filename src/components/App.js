import React from "react";
import {Switch, Redirect, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import NavBar from "./Navbar";
import AsideBar from "./AsideBar";
import CartItems from "./CartItems";
import "./App.css";
import {useSelector} from "react-redux";


export default function App(props) {

    const state = useSelector(state => state);
    return(
        <div>            
            <BrowserRouter>
                <NavBar count={state.addToCartItems.length} />
                <div className="main">
                    <AsideBar />   
                    <Switch>
                        <Route exact path="/home">
                            <Home category="mobile" store={props.store}/> 
                        </Route>
                        <Route exact path="/laptop">
                            <Home category="laptop" store={props.store}/> 
                        </Route>
                        <Route exact path="/men">
                            <Home category="men" store={props.store}/> 
                        </Route>
                        <Route exact path="/women">
                            <Home category="women" store={props.store}/> 
                        </Route>
                        <Route exact path="/cartitems" component={CartItems} />
                        <Redirect to="/home" />
                    </Switch>
                </div>                
            </BrowserRouter>
        </div>
    )
}