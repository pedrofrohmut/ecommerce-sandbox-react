import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Product = (props) => {

  const { id, title, img, price, company, info, inCart: isInCart } = props

  const buttonText = isInCart 
    ? <p className="text-capitalize mb-0">In Cart</p>
    : <i className="fas fa-cart-plus"></i>
  return (
    <ProductWrapper className="Product card col-sm-9 col-md-6 col-lg-3">
      {/* <div className="img-container p-5" onClick={ () => console.log("Clicked on product:", id) }>
        <Link to="/details">
          <img src={ img } alt="prod-img" className="card-img-top" /> 
        </Link>           

        <button className="cart-btn" disabled={ isInCart } onClick={ () => { console.log("Added to the cart")} }>
          { buttonText }
        </button>
      </div>  */}

      <header className="card-header">
        <Link to="/details">
          <img src={ img } alt="product-image"/>
        </Link>
      </header>
      <main className="card-body">
        <button className="cart-btn" disabled={ isInCart } onClick={ () => { console.log("Added to the cart")} }>
          { buttonText }
        </button>
      </main>
      <footer className="card-footer d-flex justify-content-between">
        <span className="align-self-center mb-0">{ title }</span>
        <span className="text-blue font-italic mb-0">$ {" "} { price }</span>
      </footer>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;

    &:hover {
      border: 2px solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px  0px rgba(0, 0, 0, 0.2);  
    }
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
`

export default Product