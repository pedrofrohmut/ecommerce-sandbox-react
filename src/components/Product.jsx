import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Product = (props) => {

  const { title, img, price, inCart: isInCart } = props

  const buttonText = isInCart 
    ? <p className="text-capitalize mb-0">In Cart</p>
    : <i className="fas fa-cart-plus"></i>
  return (
    <ProductWrapper className="Product col-sm-9 col-md-6 col-lg-3">
      <div className="card">
        <main className="card-body">
          <Link to="/details">
            <img src={ img } alt="product-image"/>
          </Link>
          <button className="cart-btn" disabled={ isInCart } onClick={ () => { console.log("Added to the cart")} }>
            { buttonText }
          </button>
        </main>
        <footer className="card-footer d-flex justify-content-between">
          <span className="align-self-center mb-0">{ title }</span>
          <span className="text-blue font-italic mb-0">$ {" "} { price }</span>
        </footer>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  padding: 10px;
  font-size: 1rem;

  .card {
    transition: all 0.4s linear;
    border: 2px solid transparent;

    &:hover {
      border: 2px solid rgb(204, 204, 204);
      box-shadow: 1px 0px 3px 1px rgb(204, 204, 204);
    }

    main {
      position: relative; /* for the absolute button */
      overflow: hidden; /* hides the button when not hovering */

      &:hover button {
        transform: translate(0, 0);
        transition: 0.5s all linear;
      }

      img {
        width: 100%;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
        }
      }

      
      button {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.2em 0.5em 0.2em 0.4em;
        background-color: rgb(0,204,255);
        color: #f3f3f3;
        border: 0;
        font-size: 1.6rem;
        border-radius: 0 0.9rem 0 0;
        transform: translate(-100%, 0);
        cursor: pointer;
      }
    }

    footer {
      background: transparent;
      border-top: transparent;
    }
  }
`

export default Product