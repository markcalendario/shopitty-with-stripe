import React from "react"
import Button from "./Buttons"

export function ItemCardAddToCart(props) {

  function handleAddToCart() {
    fetch(process.env.REACT_APP_API_URL + "/cart/add/" + props.productId,
      {
        method: 'POST',
        credentials: 'include'
      }).then(result => {
        return result.json()
      }).then(result => {
        alert(result.message)
      })
  }

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={props.itemPhoto} alt="Item" />
      </div>
      <div className="item-content">
        <h3 className="item-title">{props.title}</h3>
        <p className="item-description">{props.description}</p>
        <h2 className="item-price">P{props.price}</h2>
        <Button onClick={handleAddToCart} type="solid-btn-primary">Add To Cart</Button>
      </div>
    </div>
  )
}

export function ItemCardCheckOut(props) {

  function handleRemoveFromCart() {
    fetch(process.env.REACT_APP_API_URL + "/cart/remove/" + props.productId,
      {
        method: 'POST',
        credentials: 'include'
      }).then(result => {
        return result.json()
      }).then(result => {
        alert(result.message)
        window.location.reload()
      })
  }

  function handleCheckOut() {
    fetch(process.env.REACT_APP_API_URL + "/payments/checkout/" + props.productId,
      {
        method: 'POST',
        credentials: 'include'
      }).then(result => {
        return result.json()
      }).then(result => {
        if (result.success) {
          window.location.href = result.checkOutUrl
        }
      })
  }

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={props.itemPhoto} alt="Item" />
      </div>
      <div className="item-content">
        <h3 className="item-title">{props.title}</h3>
        <p className="item-description">{props.description}</p>
        <h2 className="item-price">P{props.price}</h2>
        <Button onClick={handleRemoveFromCart} type="solid-btn-danger">Remove from Cart</Button>
        <Button onClick={handleCheckOut} type="solid-btn-success">Check Out</Button>
      </div>
    </div>
  )
}