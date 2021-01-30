import React, {useState} from "react";
import './Home.css';
import Item from './Item';
import {useSelector} from "react-redux";

export default function Home(props){
    const state = useSelector(state => state);
    const [sort, setSort] = useState("")
    let products = state.products;

    function func(e) {
        setSort(e.target.value);
        if(e.target.value === "lowToHigh"){
            products = products.sort(function (a, b) {
                return a.price - b.price;
            });
        }else{
            products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)).reverse(); 
        }
    }

    return(
        <div className="products-container">
            <img id="itemPoster" src="./Images/mobilePoster2.jpg" alt=""/>
            <div className="sort-container">
                <select value={sort} onChange={func} className="select-tag">
                    <option value="" disabled className="sort-option">Sort:- </option>
                    <option value="lowToHigh" className="price-option">Price: Low - High</option>
                    <option value="highToLow" className="price-option">Price: High - Low</option>
                </select>
            </div>
            {products.map((item, index) => (
                item.category === props.category 
                ? <Item 
                    key={index}
                    item= {item}
                    addToCartItems={state.addToCartItems}
                /> : null
            ))}
        </div>
    )
}