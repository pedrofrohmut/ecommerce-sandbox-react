import React from "react"
import { storeProducts, detailProduct } from "./data"

const Context = React.createContext()

const ContextProvider = (props) => {

  const sayHello = () => (
    console.log("Hello Mth Fkr!")
  )

  const appState = {
    products: storeProducts,
    productDetail: detailProduct,
    onHello: sayHello
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
    { (context) => <WrappedComponent context={ context } /> }
  </Context.Consumer>
)

export {
  ContextProvider,
  ContextConsumer,
  withContext
}