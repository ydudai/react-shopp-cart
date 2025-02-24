import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Home'
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App() {
  //const [productList, setProductList] = useState([])
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <>
        <Routes>
          <Route path='/' element={<Home cartProducts={cartProducts} setCartProducts={setCartProducts}/>}></Route>
          <Route path='/ProductList' element={<ProductList cartProducts={cartProducts} setCartProducts={setCartProducts}/>}></Route>
          <Route path='/Cart' element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts}/>}></Route>
        </Routes>
      </>
    </>
  )
}

export default App
