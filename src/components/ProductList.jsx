import React from "react"
import styled from "styled-components"
import Product from "./Product"
import PropTypes from "prop-types"

const ProductList = (props) => {
  const { products } = props
  return (
    <ProductListWrapper>
      <div className="row">
        { 
          products.map((product, i) => 
            <Product key={ i } product={ product } />) 
        } 
      </div>
    </ProductListWrapper>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
    }).isRequired
  ).isRequired
}

const ProductListWrapper = styled.div``

export default ProductList