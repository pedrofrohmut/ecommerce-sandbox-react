import React from "react"

const Title = (props) => {
  const { name, title } = props
  return (
    <div className="Title row">
      <div className="col-md-10 mx-auto my-5 text-center text-title">
        <h2 className="text-capitalize">
          { name } <strong className="text-blue">{ title }</strong> 
        </h2>
      </div> 
    </div>
  )
}

export default Title