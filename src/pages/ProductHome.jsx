import React from "react"
import { withContext } from "../context/context"
import styled from "styled-components"
import Title from "../components/Title"
import ProductList from "../components/ProductList"

const ProductHome = (props) => {
  const { products } = props.context
  return (
    <ProductHomeWrapper className="container">
      <Title name="our" title="products" />
      <ProductList products={ products } />
    </ProductHomeWrapper>
  )
}

const ProductHomeWrapper = styled.div`
  .Title {
    margin: 1.4em 0 1em;
  }
`

export default withContext(ProductHome)