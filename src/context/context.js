import React from "react"
import { storeProducts, detailProduct, cart } from "../data/data"

const Context = React.createContext()

const ContextProvider = (props) => {

  const getStoreProductsCopy = () => (
    [ ...storeProducts ].map(product => ( { ...product } ))
  )

  const getDetailProductCopy = () => ( { ...detailProduct } )

  const getCart = () => cart

  const findProductById = (productId) => (
    getStoreProductsCopy().find(product => product.id === productId)
  )

  const isInCart = (productId) => (
    getCart().some(product => product.id === productId)
  )

  const appState = {
    products: getStoreProductsCopy(),
    productDetail: getDetailProductCopy(),
    cart: getCart(),
    onFindProductById: findProductById,
    onIsInCart: isInCart
  }
  
  return (
    <Context.Provider value={ appState }>
      { props.children }
    </Context.Provider>
  )
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