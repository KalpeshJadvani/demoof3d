export function setCartData(data){
    console.log("setCartData",data);
    return{type:"CART_ADD", payload: data};
}