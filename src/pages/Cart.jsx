import React, { Component } from "react"
import styled from "styled-components"
import Title from "../components/Title"
import { withContext } from "../context/context"
import CartList from "../components/CartList"

class Cart extends Component {
  render() {
    const isCartEmpty = this.props.context.cart.length === 0
    return (
      <CartWrapper className="container">
        { isCartEmpty ? (
          <Title name="Your Cart is Empty" title="" />
        ) : (
          <React.Fragment>
            <Title name="Your" title="Cart" />
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-12">
                    <CartList items={ this.props.context.cart } />
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="cart-totals card">
                  <div className="products-total">Products: $ 200</div>
                  <div className="delivery-tax">Delivery: $ 45</div>
                  <div className="total">Total: $ 245</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) }
      </CartWrapper>
    )
  }
}

const CartWrapper = styled.div`
  .Title {
    margin-top: 32px;
    margin-bottom: 26px;
  }

  .cart-totals {
    border: 0;
    padding: 20px 20px;
    text-align: right;
    font-size: 1.1rem;

    .products-total {
      padding: 5px 15px;
    }

    .delivery-tax {
      padding: 5px 15px 8px;
    }

    .total {
      padding: 5px 15px;
      border-top: 2px solid #666;
    }
  }
`

export default withContext(Cart)

