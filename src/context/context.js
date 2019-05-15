import React, { Component } from "react"
import { storeProducts, storeCart } from "../data/data"

const Context = React.createContext()

const reducer = (prevState, action) => {
  const newState = {
    products: [ ...prevState.products ].map(product => ( { ...product } ) ),
    cart: [ ...prevState.cart ].map(product => ( { ...product } ) )
  }

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      newState.cart.push(action.newProduct)
      return newState
    default:
      return prevState
  }
}

class ContextProvider extends Component {
  constructor(props) {
    super(props)

    const products = [ ...storeProducts ].map(product => ( { ...product } ) )

    const cart = [ ...storeCart ].map(product => ( { ...product } ) ) 

    const dispatch = (action) => this.setState( 
      (state) => reducer(state, action)
    )

    this.state = {
      products,
      cart,
      dispatch
    }
  }

  render() {
    const onFindProductById = (productId) => (
      this.state.products.find(product => product.id === productId)
    )

    const onIsInCart = (productId) => (
      this.state.cart.some(product => product.id === productId)
    )

    return (
      <Context.Provider 
        value={{
          ...this.state,
          onFindProductById,
          onIsInCart
        }}
      >
        { this.props.children }
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer

const withContext = (WrappedComponent) => (props) => (
  <Context.Consumer>
    { (context) => <WrappedComponent context={ context } { ...props } /> }
  </Context.Consumer>
) 

export {
  ContextProvider,
  ContextConsumer,
  withContext
}
