import { BUY, DELETE_CART, DELTE_BUY } from "../Action/Cart.action";

const initialState ={
    produk: "",
    totalBelanja: 0,
}

const Cart = (state=initialState, action) =>{
    
    switch (action.type) {
        case BUY:
            return{
                ...state,
                
                produk: state.produk + action.item.name,
                totalBelanja: state.totalBelanja + action.item.price
            }
        // case DELTE_BUY:
        //     return{
        //         ...state,
                
        //         produk: state.produk - action.item.name,
        //         totalBelanja: state.totalBelanja - action.item.price
        //     }
        case DELETE_CART:
            return{
                ...state,

                produk: state.produk = "",
                totalBelanja: state.totalBelanja = 0
            }
            
    
        default:
            return state;
    }
};

export default Cart;