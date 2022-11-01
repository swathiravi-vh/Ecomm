import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Cart from "./Cart";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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
