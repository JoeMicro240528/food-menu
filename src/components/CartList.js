import React from 'react'
import Cart from "./Cart";
const CartList = ({data}) => {
   
  return (
    <div>   
         {
            data.length >= 1 &&
             data.map((item) => (
                <Cart  key={item.id}  item={item}/>
             ))
         }
        </div>

     
  )
}

export default CartList