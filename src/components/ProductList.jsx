import React from "react"
import Title from "./Title"
import { ContextConsumer } from "../context"

const ProductList = () => (
  <div className="ProductList container">

    <ContextConsumer>
      { ({ products, onHello }) => (
        <>
          <Title name="our" title="products" />

          <ul>
            { products.map((product, i) => (
              <li key={ i }>
                { product.title } 
              </li>
            ))}
          </ul>
          
          <br/>

          <button onClick={ onHello }>Hello</button>
        </> 
      ) }
    </ContextConsumer> 

  </div>
)

export default ProductList