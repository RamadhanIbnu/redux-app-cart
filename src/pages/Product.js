import React from 'react';
import './Product.css'
import { useDispatch } from "react-redux";
import { addBuy, deleteBuy } from "../redux/Action/Cart.action";

export const dataProduct = [
    {
        name: "product 1",
        price: 25000,
    },
    {

        name:"product 2",
        price: 50000,
    },
    {
        name:"product 3",
        price: 15000,
    }
]

export const Product = () =>{
    const dispatch = useDispatch()

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Selamat datang silahkan membeli</h1>
            <div className="card-container">
                {dataProduct.map((item,index)=>(
                    <div className="card-product" key={index}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button onClick={()=>{dispatch(addBuy(item))}}>Beli</button>
                        {/* <button onClick={()=>{dispatch(deleteBuy(item))}}>Hapus</button> */}
                    </div>
                ))}
            </div>
            
        </div>
    )
}

// export default Product;