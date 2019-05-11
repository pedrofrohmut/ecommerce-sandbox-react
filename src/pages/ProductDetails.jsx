import React, { Component } from "react"
import styled from "styled-components"
import { withRouter } from "react-router-dom"
import { withContext } from "../context/context"
import { Link } from "react-router-dom"
import Title from "../components/Title"
import Button from "../components/Button"

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    const productId = parseInt(this.props.match.params.id)
    this.state = {
      isInCart: this.props.context.onIsInCart(productId)
    }
    this.handleAddProductToCart = this.handleAddProductToCart.bind(this)
  }

  render() {
    const { onFindProductById } = this.props.context
    const productId = parseInt(this.props.match.params.id)
    const productDetail = onFindProductById(productId)
    const { title, img, price, company, info } = productDetail
    const { isInCart } = this.state
    return (
      <ProductDetailsWrapper>
        <div className="container py-5">
          <Title title={ title } className="page-title" /> 
          <div className="row">
            <div className="col-md-6">
              <img src={ "/" + img } alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
              <div className="title"><strong>model:</strong> { title }</div> 
              <div className="company"><strong>Made by:</strong> { company }</div>
              <div className="price"><strong>Price:</strong> ${ price }</div>
              <div className="info-title">Some info about the product:</div>
              <div className="info">{ info }</div>
              <div className="buttons-container">
                <Link to="/">
                  <Button >Back to products</Button> 
                </Link> 
                <a onClick={ () => this.handleAddProductToCart(productId) }>
                  <Button  disabled={ isInCart } mainColor="var(--mainYellow)">
                    { isInCart ? "Is in the Cart" : "Add to Cart" }
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ProductDetailsWrapper>
    )
  }

  handleAddProductToCart() {
    const productId = parseInt(this.props.match.params.id)
    this.props.context.onAddProductToCart(productId)
    const isInCart = this.props.context.onIsInCart(productId)
    this.setState(() => ({ isInCart }))
  }
}

const ProductDetailsWrapper = styled.div`
  .Title {
    margin-bottom: 2.6em;
  }

  .col-md-6 {
    .title, .company, .price, .info-title,
    .info {
      margin-bottom: 0.8em;
    }

    .price {
      color: var(--mainBlue);
      font-weight: 500;
      font-size: 1.1rem;
    }

    .info-title {
      font-weight: 500;
      text-transform: capitalize;
    }

    .info {
      color: var(--lighterDark);
      text-align: justify;
    }
  }

  .buttons-container {
    margin-top: 1.2em;

    button {
      margin-right: 1em;
    }
  }
` 

export default withRouter( withContext(ProductDetails) )