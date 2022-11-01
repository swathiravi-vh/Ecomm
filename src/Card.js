function Card() {
  return (
     <div className="col-lg-4 border mt-2 p-2">
              <div className="row">
                <div className="col-lg-12">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/500/300"
                  />
                </div>
                <div className="col-lg-12">
                  <h3>Title</h3>
                  <h6>Price RS300</h6>
                  <button className="btn btn-sm btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

  )
}

export default Card