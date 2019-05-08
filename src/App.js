import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import ProductDetails from "./components/ProductDetails"
import Cart from "./components/Cart"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/details" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route component={ PageNotFound } />
        </Switch>
      </div> 
    </BrowserRouter>
  )
}

export default App