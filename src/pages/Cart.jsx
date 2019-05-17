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
            <CartList items={ this.props.context.cart } />
          </React.Fragment>
        ) }
      </CartWrapper>
    )
  }
}

const CartWrapper = styled.div`
`

export default withContext(Cart)

