import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import { ContextProvider } from "./context"
import App from "./App"

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>, 
  document.getElementById("root")
)