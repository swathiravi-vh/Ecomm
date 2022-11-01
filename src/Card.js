function Card({product,addToCart}) {
  return (
     <div className="col-lg-4 border mt-2 p-2">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    className="img-fluid"
                    src={product.img}
                  />
                </div>
                <div className="col-lg-12">
                  <h3>{product.name}</h3>
                  <h6>Price RS{product.price}</h6>
                  <button onClick={() => {
                    addToCart(product)
                  }} className="btn btn-sm btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

  )
}

export default Card