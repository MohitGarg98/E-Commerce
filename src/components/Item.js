import React,{useState} from 'react';
import './Item.css';
import {addToCart, increseItemCount, removeFromcart, decreseItemCount} from '../actions';
import {useDispatch} from "react-redux";

function Item(props) {
    const addToCartItems = props.addToCartItems;
    let item = props.item;
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    function addedToCart(e) {
        e.stopPropagation();
        dispatch(addToCart(item));
    }

    function removeFromCart(e) {
        e.stopPropagation();
        dispatch(removeFromcart(item));
    }

    function increseItemCountFunc(e) {
        e.stopPropagation();
        dispatch(increseItemCount(item));
    }

    function decreseItemCountFunc(e) {
        e.stopPropagation();
        if(item.qty !== 0){
            dispatch(decreseItemCount(item));
        }
    }

    function isAddToCartItem(item) {
        const index = addToCartItems.findIndex(i => item.id === i.id);
        if(index !== -1){
            return true;
        }     
        return false;               
    }

    function showDetails() {
        setShow(true);
    }

    function hideDetails(e) {
        e.stopPropagation();
        setShow(false);
    }

    return (
        <div className="item" onClick={showDetails}>            
            <div className="left-item">
                <img src={props.item.img} alt="img2"/>
            </div>
            <div className="right-item">
                <h3 className="item-title">{props.item.title}</h3>
                <h3 className="item-price">Price: {props.item.price} /-</h3>
                <div className="star-container">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div className="qty-container">
                    <span className="item-qty">Quantity: </span>
                    <div className="count-container">
                        <button className="count-btn" onClick={decreseItemCountFunc}>-</button>
                        <span className="item-count"> {props.item.qty} </span>
                        <button className="count-btn" onClick={increseItemCountFunc}>+</button>
                    </div>
                </div>
                {
                    isAddToCartItem(item)
                    ? <button style={{backgroundColor: "rgb(250, 73, 73)"}} className="add-to-cart-btn" onClick={removeFromCart}><span>Remove From Cart</span></button>
                    : <button className="add-to-cart-btn" onClick={addedToCart}>Add To Cart</button>
                }
            </div>
            {show ?
            <div className="details-container">
                <img src={props.item.img} alt="img2"/>
                <div className="details">
                    <h3 className="item-title-details">{props.item.title}</h3>
                    <h4 className="item-price-details">Price: {props.item.price} /-</h4>
                    <p className="item-details" dangerouslySetInnerHTML={{__html:props.item.details}}></p>
                    <div style={{margin: "15px"}} className="star-container">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <span className="item-qty-details">Quantity: </span>
                    <div className="count-container">
                        <button className="count-btn" onClick={decreseItemCountFunc}>-</button>
                        <span className="item-count"> {props.item.qty} </span>
                        <button className="count-btn" onClick={increseItemCountFunc}>+</button>
                    </div>
                    {
                        isAddToCartItem(item)
                        ? <button style={{left: "25%", width: "55%"}} className="add-to-cart-btn" onClick={removeFromCart}><span>Remove From Cart</span></button>
                        : <button style={{left: "28%", width: "48%"}} className="add-to-cart-btn" onClick={addedToCart}>Add To Cart</button>
                    }
                </div>                
                <i className="far fa-times-circle closeButton" onClick={hideDetails}></i>
            </div> : null}
        </div>
    )
}

export default Item;
