import React from "react"
import { ContextConsumer } from "../context"
import Title from "./Title"
import Product from "./Product"

const ProductList = () => (
  <ContextConsumer>
    { ({ products }) => (
      <div className="ProductList container">
        <Title name="our" title="products" />

        <div className="row">
          { products.map((product, i) => 
            <Product key={ i } { ...product } />
          ) }
        </div>
      </div>
    ) }
  </ContextConsumer> 
)

export default ProductList