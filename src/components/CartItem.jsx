import React from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"

const CartItem = (props) => {

//##########################################################################
  // Testing Data
  const cartItem = {
    product: {
      id: 1,
      title: "Google Pixel - Black",
      img: "img/product-5.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    quantity: 1,
    total: 20
  }
//##########################################################################
  const { product, quantity, total } = cartItem // testing! (change source after)

  return (
    <CartItemWrapper className="CartItem">
      {/* Card */}
      <ProductCard product={ product } />

      <div className="price-and-total-container">
        {/* Price */}
        <div className="cart-price">Price: ${ product.price }</div>

        {/* Total */}
        <div className="cart-item-total">Total: ${ total }</div>
      </div>

      <div className="quantity-and-trash-container">
        {/* Quantity Control */}
        <div className="quantity-control">
          <a>
            <i class="fas fa-minus-square"></i>
          </a>
          <span>{" " + quantity + " "}</span>
          <a>
            <i class="fas fa-plus-square"></i>
          </a>
        </div>

        {/* Trash Can */}
        <div className="trash">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
  background: #fff;
  padding: 10px 15px 20px;

  .ProductCard {
    padding: 0;

    .card-footer {
      .footer-title {
        font-weight: 600;
      }

      .footer-price {
        display: none;
      }
    }
  }

  .price-and-total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px 5px;

    .cart-item-total,
    .cart-price {
      color: var(--lighterDark2);
    }
  }

  .quantity-and-trash-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;

    .quantity-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 110px;

      a {
        text-align: center;
        padding: 0;
        font-size: 1.7rem;
        color: var(--lighterDark3);
      }

      span {
        padding: 0 12px;
        font-size: 1.2rem;
      }
    }

    .trash {
      font-size: 1.4rem;
      color: var(--lighterOrange);
    }
  }
`

export default CartItem
