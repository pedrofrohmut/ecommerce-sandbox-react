import React, { Component } from "react"
import styled from "styled-components"
import Title from "../components/Title"
import { withContext } from "../context/context"

class Cart extends Component {
  render() {
    const isCartEmpty = this.props.context.cart.length === 0
    return (
      <CartWrapper>
        { isCartEmpty ? (
          <Title name="Your Cart is Empty" title="" />
        ) : (
          <Title name="Your" title="Cart" />
        ) }
      </CartWrapper>
    )
  }
}

const CartWrapper = styled.div`
`

export default withContext(Cart)

