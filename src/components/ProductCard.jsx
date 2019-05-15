import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { withContext } from "../context/context"
import { Link } from "react-router-dom"

const ProductCard = (props) => {

  const { onOpenModal } = props
  const { onIsInCart } = props.context
  const { id: productId, title, img, price } = props.product

  const isInCart = onIsInCart(productId)
  const buttonText = isInCart 
    ? <span className="text-capitalize mb-0">Is In Cart</span>
    : <i className="fas fa-cart-plus"></i>

  const handleAddProductToCart = (productId) => {
    onOpenModal(productId)

    const action = {
      type: "ADD_PRODUCT_TO_CART",
      newProduct: props.context.onFindProductById(productId)
    }
    props.context.dispatch(action)
  }

  return (
    <ProductCardWrapper className="Product col-sm-9 col-md-6 col-lg-3">
      <div className="card">
        <main className="card-body">
          <Link to={ "/details/" + productId }>
            <img src={ img } alt=""/>
          </Link>
          <button 
            className="cart-btn" 
            disabled={ isInCart } 
            onClick={ () => handleAddProductToCart(productId) }
          >
            { buttonText  }
          </button>
        </main>
        <footer className="card-footer d-flex justify-content-between">
          <span className="align-self-center mb-0">{ title }</span>
          <span className="text-blue font-italic mb-0">$ {" "} { price }</span>
        </footer>
      </div>
    </ProductCardWrapper>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
}

const ProductCardWrapper = styled.div`
  padding: 10px;
  font-size: 1rem;

  .card {
    transition: all 0.4s linear;
    border: var(--cardBorder);

    &:hover {
      border: var(--cardBorderHover);
      box-shadow: var(--cardShadow);
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
        background-color: var(--lightBlue);
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

export default withContext(ProductCard)
