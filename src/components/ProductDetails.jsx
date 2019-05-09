import React from "react"
import styled from "styled-components"
import { withContext } from "../context"
import { Link } from "react-router-dom"
import { ButtonContainer } from "../styled-components/Buttons"
import Title from "./Title";

const ProductDetails = (props) => {

  const {
    id, title, img, price, company, info, inCart: isInCart, count, total 
  } = props.context.productDetail

  return (
    <ProductDetailsWrapper>
      <div className="container py-5">
        <Title title="TITLE" /> 
        <div className="row">
          <div className="col-md-6">
            <img src={ img } alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6">
            <div className="title">model: { title }</div> 
            <div className="company">Made by: { company }</div>
            <div className="price">Price: ${ price }</div>
            <div className="info-title">Some info about the product:</div>
            <div className="info">{ info }</div>
            <div className="buttons-container">
              <Link to="/">
                <ButtonContainer>Back to products</ButtonContainer> 
              </Link> 
              <ButtonContainer disabled={ isInCart } onClick={ () => console.log("Hello") }>
                { isInCart ? "Is in the Cart" : "Add to Cart" }
              </ButtonContainer>
            </div>
          </div>
        </div>
      </div>
    </ProductDetailsWrapper>
  )
} 

const ProductDetailsWrapper = styled.div`` 

export default withContext(ProductDetails)