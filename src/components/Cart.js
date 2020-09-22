import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../redux/Action/Cart.action";

const Cart = () =>{
    const produk = useSelector((state) => state.produk);
    const total = useSelector((state) => state.totalBelanja);
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Keranjang belanja anda</h1>
            <div className="container-keranjang">
                <p>produk yang dibeli : {produk} </p>
                <p>total belanja : {total} </p>
            </div>
            <div className="delete-keranjang">
                <button onClick={()=>{dispatch(deleteCart())}}>Hapus daftar belanja</button>
            </div>
        </div>
    )
};

export default Cart;