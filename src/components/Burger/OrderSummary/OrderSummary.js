import React from 'react'
import Auxx from '../../HOC/Auxx'

const orderSummary = ( props ) => {
  const ingredientSumary = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item} >{item.charAt(0).toUpperCase() + item.slice(1)}: {props.ingredients[item]}</li>
    )
  })
  return (
    <Auxx>
      <h3>Your Order</h3>
      <ul>
        {ingredientSumary}
      </ul>
      <p>Total: ${props.price}</p>
      <p>Checkout?</p>
      <button onClick={props.finish}>Continue</button>
      <button onClick={props.cancel}>Cancel</button>
    </Auxx>
  )
}
export default orderSummary
