import React from "react"
import { withContext } from "../context.js"
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

const ProductHomeWrapper = styled.div``

export default withContext(ProductHome)