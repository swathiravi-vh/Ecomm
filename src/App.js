import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";
import { useState } from "react";


function App() {
  const products =[
    {
      id :1,
      name: 'iPhone',
      price: 100000,
      img:'data:image/jpeg;base64,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'
    },
    {
      id : 2,
      name: 'iWatch',
      price: 30000,
      img:'https://m.media-amazon.com/images/I/51bJSYeOF1S._UY500_.jpg'
    },
    {
      id:3,
      name: 'iPad',
      price: 45000,
      img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-2022-hero-blue-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1664387252369'
    },
    {
      id:4,
      name: 'iPen',
      price: 29000,
      img :'data:image/jpeg;base64,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'
    },
    {
      id :5,
      name: 'MacBook Pro',
      price: 56000,
      img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415676/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_0_pin6ch.png/mxw_1440,f_auto'
    },
    {
      id:6,
      name: 'iPhoneSE',
      price: 65000,
      img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009850/Croma%20Assets/Communication/Mobiles/Images/249850_0_zcz0hq.png/mxw_1440,f_auto'
    },
  ]
  const [cartItems,setCartItems] = useState([])
  let addToCart = (product) => {
   setCartItems([...cartItems,product])
  }
  let removeFromCart= (product) => {
    const indexVal = cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product) => {
                return <Card product={product} addToCart={addToCart}  />
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Cart</h3>
           <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
