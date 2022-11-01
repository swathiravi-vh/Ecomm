import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";


function App() {
  const products =[
    {
      name: 'iPhone',
      price: 100000
    },
    {
      name: 'iWatch',
      price: 30000
    },
    {
      name: 'iPad',
      price: 45000
    },
    {
      name: 'iPen',
      price: 29000
    },
    {
      name: 'MacBook Pro',
      price: 56000
    },
    {
      name: 'iPhoneSE',
      price: 65000
    },
  ]
  let addToCart = (product) => {
  alert(product.name)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product) => {
                return <Card product={product} addToCart={addToCart} />
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <h3>Cart</h3>
           <Cart/>
        </div>
      </div>
    </div>
  );
}

export default App;
