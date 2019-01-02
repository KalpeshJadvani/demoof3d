
const cartData  = (state = { data:[] }, action) => {
 
    switch(action.type){
        case "CART_ADD":
        let data = state.data.concat(action.payload);
        return {data};
        
       // return {data :[...state.data, ...action.payload]};
        //break;
        
        default:
        return state;
    }


}

export default cartData;