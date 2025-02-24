import React, { useState }  from 'react'
import Product from './Product';

function getProductList() {
  return (
    [
      {
        "productName": "Computer",
        "price": 100
      },
      {
        "productName": "Paper",
        "price": 1
      },
      {
        "productName": "Pen",
        "price": 10
      }
    ]
  )
}

export default function ProductList(props) {
  let pList = getProductList();
  const [productList, setProductList] = useState(pList)
  let cartProducts=props.cartProducts
  const setCartProducts=props.setCartProducts

  return (
    <div>
      <h2 className='text-3xl border-2'>List of products</h2>
      {productList.map((element, index) => {
        return <Product key={index} productName={element.productName} price={element.price} cartProducts={props.cartProducts} setCartProducts={props.setCartProducts}/>
      })}
    </div>
  )
}
