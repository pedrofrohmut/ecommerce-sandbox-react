import React, { Component } from "react"
import { withContext } from "../context/context"
import styled from "styled-components"
import Title from "../components/Title"
import ProductList from "../components/ProductList"

class ProductHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalProduct: null
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal(productId) {
    console.log("handle show modal, product id = ", productId)
    const modalProduct = this.props.context.onFindProductById(productId)
    console.log(modalProduct)
  }

  handleCloseModal() {}

  render() {
    const { products } = this.props.context
    return (
      <ProductHomeWrapper className="container">
        {/* { modalProduct && <ModalProduct /> } */}
        <Title name="our" title="products" />
        <ProductList products={ products } onOpenModal={ this.handleOpenModal } />
      </ProductHomeWrapper>
    )
  }
}

const ProductHomeWrapper = styled.div`
  .Title {
    margin: 1.4em 0 1em;
  }
`

export default withContext(ProductHome)