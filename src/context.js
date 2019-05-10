import React from "react"
import { storeProducts, detailProduct } from "./data"

const Context = React.createContext()

const ContextProvider = (props) => {

  const findProductById = (products, productId) => (
    products.find(product => product.id === productId)
  )

  const appState = {
    products: [ ...storeProducts ].map(product => ( { ...product } )),
    productDetail: { ...detailProduct },
    onFindProductById: findProductById
  }
  
  return (
    <Context.Provider value={ appState }>
      { props.children }
    </Context.Provider>
  )
}

const ContextConsumer = Context.Consumer

const withContext = (WrappedComponent) => () => (
  <Context.Consumer>
    {
      (context) => 
        <WrappedComponent context={ context }/> 
    }
  </Context.Consumer>
)
  
export {
  ContextProvider,
  ContextConsumer,
  withContext
}