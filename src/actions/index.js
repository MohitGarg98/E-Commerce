//action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCRESE_COUNT_ADD_TO_CART = 'INCRESE_COUNT_ADD_TO_CART';
export const INCRESE_ITEM_COUNT = 'INCRESE_ITEM_COUNT';
export const DECRESE_ITEM_COUNT = 'DECRESE_ITEM_COUNT';

//action creater
export function addToCart(item){
    return {
      type: "ADD_TO_CART",
      item
    }
}

export function increseCountAddToCart(){
    return {
      type: INCRESE_COUNT_ADD_TO_CART
    }
}

export function increseItemCount(item){
    return {
      type: INCRESE_ITEM_COUNT,
      item
    }
}

export function decreseItemCount(item){
    return {
      type: DECRESE_ITEM_COUNT,
      item
    }
}

export function removeFromcart(item){
    return {
      type: REMOVE_FROM_CART,
      item
    }
}