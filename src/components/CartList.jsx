import React from "react"
import styled from "styled-components"
import CartItem from "./CartItem"

const CartList = (props) => {
  const { items } = props
  return (
    <CartListWrapper>
      <h1>Hello From Cart List</h1>
      { items && (
        <>
          <div className="row">
            { 
              items.map((item, i) => 
                <div className="col-sm-9 col-md-6 col-lg-3">
                  <CartItem 
                    key={ i } 
                    item={ item } 
                  /> 
                </div>
              ) 
            }
          </div>
        </>
      ) }
    </CartListWrapper>
  )
}

const CartListWrapper = styled.div`
`

export default CartList
