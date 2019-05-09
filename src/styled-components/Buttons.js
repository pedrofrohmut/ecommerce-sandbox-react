import styled from "styled-components"

// TODO: Make a React.Component from this styled component

export const ButtonContainer = styled.button`
  text-transform: captilize;
  font-size: 1.1em;
  background-color: transparent;
  border: 2px solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.35em;
  padding: 0.2em 0.5em;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--lightBlue);
    border-color: var(--mainBlue);
    color: var(--mainBlue);
  }
`
