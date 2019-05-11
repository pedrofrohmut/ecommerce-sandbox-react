import React from "react"
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import Button from "./Button"

const Navbar = () => {
  return (
    <NavbarWrapper className="Navbar"> 
      <div className="container">
        <ul>
          <li>
            <Link to="/" className="brand">
              <i className="fas fa-phone-square mr-2"></i> 
              <span>E-commerce</span>
            </Link>
          </li>
          <li>
            <NavLink to="/" className="home-link">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="cart-link">
              <Button>
                <i className="fas fa-cart-plus mr-3"></i> Cart
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  font-size: 1rem;

  .container {
    ul {
      padding: 0.8em 0;

      li {
        display: inline-block;
        padding-right: 1em;

        .brand {
          font-size: 1.5rem;
          color: var(--mainWhite);
        }

        a {
          color: var(--mainWhite);
        }

        .home-link {
          padding: 0 1em;
        }

        .cart-link {
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      font-size: 0.9rem;

      .brand {
        font-size: 1.2rem;
      }
    }
  }
`

export default Navbar