import React from 'react';
import { NavLink} from "react-router-dom";
import './AsideBar.css';

function AsideBar() {
    return (
        <div className="left-aside-bar">
            <h1 className="cat-heading">Categories</h1>
            <span className="line"></span>
            <NavLink className="category" activeClassName="category-active" exact to="/home">Mobiles</NavLink><span className="line"></span>
            <NavLink className="category" activeClassName="category-active" exact to="/contact">Laptops</NavLink><span className="line"></span>
            <NavLink className="category" activeClassName="category-active" exact to="/men">Men's Clothes</NavLink><span className="line"></span>
            <NavLink className="category" activeClassName="category-active" exact to="/women">Women's Clothes</NavLink><span className="line"></span>
        </div>
    )
}

export default AsideBar
