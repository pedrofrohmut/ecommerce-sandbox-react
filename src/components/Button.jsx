import React from "react"
import styled from "styled-components"

const Button = (props) => {
  const { children } = props
  let mainColor = props.mainColor || "var(--lightBlue)"
  return (
    <ButtonWrapper className="Button" mainColor={ mainColor }>
      { children }
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border-color: ${props => props.mainColor };
  color: ${props => props.mainColor };

  border: 2px solid;
  text-transform: captilize;
  font-size: 1.1em;
  font-weight: 500;
  background-color: transparent;
  border-radius: 0.35em;
  padding: 0.2em 0.5em;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${props => props.mainColor };
    border-color: ${props => props.mainColor };
    color: var(--mainWhite);
  }
`

export default Button