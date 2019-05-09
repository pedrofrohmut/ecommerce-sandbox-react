import React from "react"
import { withContext } from "../context.js"
import Title from "./Title"
import Product from "./Product"

const ProductList = (props) => {
  const { products } = props.context
  return (
    <div className="ProductList container">
      <Title name="our" title="products" />
      <div className="row">
        { products.map( (product, i) => <Product key={ i } product={ product } /> ) }
      </div>
    </div>
  )
}

export default withContext(ProductList)