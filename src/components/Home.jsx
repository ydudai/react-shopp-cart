import ProductList from './ProductList'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Home(props) {
    let cartProducts = props.cartProducts;
    const setCartProducts = props.setCartProducts;

    //programmatic navigation
    const navigate = useNavigate();
    const handleImageClick = () => {
      navigate('/Cart');
    };
  
    return (
        <div>
            <div className="flex items-center gap-30 border-2">
                <a href="/" className="hover:opacity-80 transition-opacity">
                    <img src='src\assets\home-svgrepo-com.svg'
                        alt="Home"
                        className="w-12 h-12"
                    />
                </a>
                <h1 className='text-5xl'>SV-SHOP</h1>

                <img src='src\assets\shopping-cart-8-svgrepo-com.svg'
                    alt="Cart"
                    className="w-12 h-12"
                    onClick={handleImageClick}
                />
            </div>
            <div className="flex items-center gap-30 border-2">
                <ProductList cartProducts={cartProducts} setCartProducts={setCartProducts}></ProductList>
            </div>
        </div>
    )
}
