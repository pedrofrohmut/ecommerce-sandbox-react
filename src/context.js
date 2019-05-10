import React from "react"
import { storeProducts, detailProduct } from "./data"

const Context = React.createContext()

const ContextProvider = (props) => {

  const getStoreProductsCopy = () => (
    [ ...storeProducts ].map(product => ( { ...product } ))
  )

  const getDetailProductCopy = () => ( { ...detailProduct } )

  const findProductById = (productId) => (
    getStoreProductsCopy().find(product => product.id === productId)
  )

  const appState = {
    products: getStoreProductsCopy(),
    productDetail: getDetailProductCopy(),
    onFindProductById: findProductById
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