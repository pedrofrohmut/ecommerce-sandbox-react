import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Title = (props) => {
  const { name, title } = props
  return (
    <TitleWrapper className="Title row">
      <div className="col-md-10 mx-auto text-center text-title">
        <h2 className="text-capitalize">
          { name ? name : null} 
          <strong className="text-blue">{ title }</strong> 
        </h2>
      </div> 
    </TitleWrapper>
  )
}

Title.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired
}

const TitleWrapper = styled.div``

export default Title