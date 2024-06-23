import React from 'react'

const Input = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`${className} rounded-2 border border-solid border-red-600 bg-white px-3 py-2 font-normal outline-none`}
    ></input>
  )
}

export default Input
