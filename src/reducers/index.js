import {ADD_TO_CART, REMOVE_FROM_CART, INCRESE_ITEM_COUNT, DECRESE_ITEM_COUNT} from '../actions';
import {products} from '../data';
let initialState = {
    products: products,
    addToCartItems: [], 
    increseItemCount: 0
};
export default function items(state= initialState, action) {
    if(action.type === ADD_TO_CART){
        return{
            ...state,
            addToCartItems: [...state.addToCartItems, action.item]
        }
    }

    if(action.type === INCRESE_ITEM_COUNT){
        let itemStringify = JSON.stringify(action.item);
        let products = state.products;
        products = products.map((product, i) => {
            if(JSON.stringify(product) === itemStringify ){
                let qty = products[i].qty + 1;
                product = {...product, qty: qty};
            }           
            return product;
        });

        let addToCartItems = state.addToCartItems;
        addToCartItems = addToCartItems.map((product, i) => {
            if(JSON.stringify(product) === itemStringify){
                let qty = addToCartItems[i].qty + 1;
                product = {...product, qty: qty};
            }
            
            return product;
        });

        return{
            ...state,
            products: products,
            addToCartItems: addToCartItems
        }
    }

    if(action.type === DECRESE_ITEM_COUNT){
        let itemStringify = JSON.stringify(action.item);
        let products = state.products;
        products = products.map((product, i) => {
            if(JSON.stringify(product) === itemStringify ){
                let qty = products[i].qty - 1;
                product = {...product, qty: qty};
            }           
            return product;
        });

        let addToCartItems = state.addToCartItems;
        addToCartItems = addToCartItems.map((product, i) => {
            if(JSON.stringify(product) === itemStringify){
                let qty = addToCartItems[i].qty - 1;
                product = {...product, qty: qty};
            }
            
            return product;
        });

        return{
            ...state,
            products: products,
            addToCartItems: addToCartItems
        }
    }

    if(action.type === REMOVE_FROM_CART){
        const filteredArray = state.addToCartItems.filter(item => (item.id !== action.item.id))
        return{
            ...state,
            addToCartItems: filteredArray
        }
    }

    return state;
}