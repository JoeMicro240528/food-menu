import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../rtk/slice/cart-slice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, item) => {
    return acc += item.price * item.quantity
  }, 0)
  return (
    <div>
      {
        products.length === 0 ? (
          <>
            <h1 className='text-center my-5 pt-5'>Your Cart is Empty</h1>
            <p className='text-center'>Add some products to your cart to see them here.</p>
          </>
        ) : (
          <>
            <div className='container pt-5 mt-5'>
              <h1 className='text-center'>Your Cart</h1>
              <div className='d-flex justify-content-between py-2'>
                <h3>Total Price = {totalPrice.toFixed(2)}$</h3>
                <Button variant='danger' onClick={()=> dispatch(clearCart())}>Clear Cart</Button>
              </div>
              <table className='table table-striped table-bordered'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td><img style={{ width: '4rem' }} src={product.image} alt="product" /></td>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>${product.price * product.quantity}</td>
                      <td><Button variant='danger' onClick={() => dispatch(removeFromCart(product))} >Delete</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div><div className='text-center my-5'>
              <button className='btn btn-primary'>Proceed to Checkout</button>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Cart