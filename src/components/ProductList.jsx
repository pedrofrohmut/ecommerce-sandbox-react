import React from "react"
import styled from "styled-components"
import ProductCard from "./ProductCard"
import PropTypes from "prop-types"

const ProductList = (props) => {
  const { products, onOpenModal } = props
  return (
    <ProductListWrapper className="ProductList">
      <div className="row">
        { 
          products.map((product, i) => 
            <div className="col-sm-9 col-md-6 col-lg-3">
              <ProductCard 
                key={ i } 
                product={ product } 
                onOpenModal={ onOpenModal } 
              />
            </div>
          ) 
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
