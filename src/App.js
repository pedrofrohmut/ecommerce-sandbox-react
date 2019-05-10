import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import ProductHome from "./pages/ProductHome"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={ ProductHome } />
          <Route path="/details" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route component={ PageNotFound } />
        </Switch>
      </div> 
    </BrowserRouter>
  )
}

export default App