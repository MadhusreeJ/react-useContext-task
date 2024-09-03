import React, { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import CartContext from './CartContext'

const Cart = () => {

    const item = useContext(CartContext);

    return (
        <>
            <div className='container'>
                <div className='row col-lg-12'>
                    <div className='col col-lg-3'>
                        <img src={item.product.image} style={{ height: '100px', width: '100px' }} />
                    </div>
                    <div className='col col-lg-3'>
                        <h6>{item.product.title}</h6>
                    </div>
                    <div className='col col-lg-3'>
                        <h6>Quantity:</h6>
                        <select value={item.quantity} onChange={e => item.setQuantity(e.target.value)}>
                            <option value="0"> 0 </option>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                            <option value="6"> 6 </option>
                            <option value="7"> 7 </option>
                            <option value="8"> 8 </option>
                            <option value="9"> 9 </option>
                            <option value="10"> 10 </option>
                        </select>
                    </div>
                    <div className='col col-lg-3'>
                        <h4>${item.product.price}</h4>
                    </div>
                </div>
                <hr style={{ color: '#ff1a8c' }} />
                <div style={{ height: 30 }}>
                    <h6 style={{ color: "grey" }}>SUBTOTAL : <span style={{ position: "absolute", right: 330, color: "black" }}> ${item.quantity * item.product.price}</span></h6>
                </div>
                <div>
                    <h6 style={{ color: "grey" }}>SHIPPING : <span style={{ position: "absolute", right: 330, color: "black" }}> FREE </span></h6>
                </div>

                <hr style={{ color: '#ff1a8c' }} />
                <h3>Total : <span style={{ position: "absolute", right: 330 }}>{item.quantity * item.product.price}</span></h3>
            </div>
        </>
    )
}

export default Cart