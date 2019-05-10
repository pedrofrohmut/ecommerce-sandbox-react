import React from "react"
import { NavLink } from "react-router-dom"
import { ButtonContainer } from "../styled-components/Buttons"
import styled from "styled-components"

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar"> 
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="fas fa-phone-square mr-2"></i> 
          <span>E-commerce</span>
        </a>
        <ul>
          <li>
            <NavLink to="/" className="home-link">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart-link">
              <ButtonContainer>
                <i className="fas fa-cart-plus mr-3"></i> Cart
              </ButtonContainer>
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  height: 70px;
  opacity: 0.9;
  font-size: 1rem;

  .navbar-brand {
    width: 136px;
    margin-right: 0;
    font-size: 1.5rem;
    color: var(--mainWhite);
  }

  ul {
    width: calc(100% - 136px);
    margin: 0;
    padding-left: 2em;

    li {
      display: inline;

      a {
        color: var(--mainWhite);
      }

      .home-link {
        padding: 0 2em;
        position: relative;
        top: 11px;
      }

      .cart-link {
        float: right;
      }
    }
  }

  @media (max-width: 768px) {
    .navbar-brand {
      font-size: 1.1rem;
    }
  }
`

export default Navbar