import React, { Component } from "react"
import { withContext } from "../context/context"
import styled from "styled-components"
import Title from "../components/Title"
import ProductList from "../components/ProductList"
import Modal from "../components/Modal"

class ProductHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false,
      modalProduct: null
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal(productId, e) {
    console.log("On Open Modal")
    const product = this.props.context.onFindProductById(productId)
    this.setState({
      isModalOpen: true,
      modalProduct: product
    })
  }

  handleCloseModal(e) {
    this.setState({
      isModalOpen: false,
      modalProduct: null
    })
  }

  render() {
    const { products } = this.props.context
    const { isModalOpen, modalProduct } = this.state
    return (
      <ProductHomeWrapper className="container">

        {/* TEMP */}
        { isModalOpen && 
            <Modal 
              product={ modalProduct } 
              onCloseModal={ this.handleCloseModal } /> 
        } 

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

