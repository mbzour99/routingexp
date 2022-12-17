import React from 'react'

export const Moh = (props) => {
    const sty={
        color:props.color,
        backgroundColor:props.colo
    }
  return (
    <div style={sty}>{isNaN(props.number)?`The Word is: ${props.number}`:`The number is: ${props.number}`} </div>
  )
}
