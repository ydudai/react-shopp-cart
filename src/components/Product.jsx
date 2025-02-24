import React, { useState } from 'react'

export default function Product(props) {
    let cartProducts = props.cartProducts;
    const setCartProducts = props.setCartProducts;

    function addProduct() {
        let product = {productName: props.productName,  price: props.price}
        setCartProducts([...cartProducts, product])
    }

    return (
        <div className="flex place-content-between bg-blue-500 border-2">
            <p className='text-4xl'>{props.productName} price={props.price}</p>
            <button value="+" className='font-bold text-9xl border-2' onClick={addProduct}>+</button>
        </div>
    )
}
