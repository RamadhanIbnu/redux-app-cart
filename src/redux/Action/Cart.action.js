export const BUY = "BUY";
// export const DELTE_BUY = "DELETE_BUY"
export const DELETE_CART = "DELETE_CART"

export const addBuy = (item)=>{
    return{
        type: BUY,
        item
    }
}

// export const deleteBuy = (item) =>{
//     return{
//         type: DELTE_BUY,
//         item
//     }
// }

export const deleteCart = () =>{
    return{
        type: DELETE_CART
    }
}