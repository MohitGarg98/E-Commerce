import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {increseItemCount, decreseItemCount, removeFromcart} from '../actions';
import "./CartItems.css"

export default function CartItems(){
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let addToCartItems = state.addToCartItems;

    function totalAmount() {
        let total = 0;
        addToCartItems.map(item => (
            total += item.qty * item.price
        ))
        return total;
    }

    function removeFromCart(item) {
        return function () {
            dispatch(removeFromcart(item));
        }
    }

    function increseItemCountFunc(item) {
        return function () {
            dispatch(increseItemCount(item));
        }
    }

    function decreseItemCountFunc(item) {
        return function () {
            if(item.qty !== 0){
                dispatch(decreseItemCount(item));
            }
        }
    }
    console.log(addToCartItems);

    return(
        addToCartItems.length !== 0 ?
        <div id="cart-container">
            <h1 className="cart-heading">Your Cart</h1>
            <div className="cart-items-header">
                <ul className="cart-items-ul">
                    <li className="cart-items-li">Product</li>
                    <li className="cart-items-li">Product Name</li>
                    <li className="cart-items-li">Quantity</li>
                    <li className="cart-items-li">Total</li>
                </ul>
            </div>
            <div className="cart-items-main">
                {addToCartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <ul className="cart-items-ul cart-item-ul-2">
                            <li className="cart-items-li cart-items-li-2"><img className="cart-items-img" src={addToCartItems[index].img} alt=""/></li>
                            <li className="cart-items-li cart-items-li-2">{addToCartItems[index].title}</li>
                            <li className="cart-items-li cart-items-li-2">
                                <div className="count-container">
                                    <button className="count-btn" onClick={decreseItemCountFunc(item)}>-</button>
                                    <span className="item-count"> {item.qty} </span>
                                    <button className="count-btn" onClick={increseItemCountFunc(item)}>+</button>
                                </div>
                            </li>
                            <li className="cart-items-li cart-items-li-2">{addToCartItems[index].qty * addToCartItems[index].price}/-</li>
                            <button id="remove" onClick={removeFromCart(item)}>Remove</button>
                        </ul>
                    </div>
                ))}
            </div>
            <h3 className="total-amount">Total Amount: {totalAmount()}/-</h3>
        </div>
        : <h2 className="cart-empty">Cart is Empty...</h2>
    )
}