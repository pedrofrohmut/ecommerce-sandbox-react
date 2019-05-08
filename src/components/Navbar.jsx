import React from "react"
import { NavLink } from "react-router-dom"
import { ButtonContainer } from "../styled-components/Buttons"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
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
      </nav>
    </div>
  )
}

export default Navbar