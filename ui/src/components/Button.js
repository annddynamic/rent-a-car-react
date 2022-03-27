import React from 'react'

const Button = ({color, backgroundColor, text}) => {
  return (
    <button style={{color:color, backgroundColor:backgroundColor, borderRadius:"10px"}} >{text}</button>
  )
}

export default Button