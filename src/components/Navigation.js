import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Navigation = () => {
  const cart = useSelector((state) => state.cart)
  const cartItems = cart.length > 0 ? cart.length : 0
  return (
    <div>
      <Navbar expand="lg" className=" bg-light fixed-top shadow-sm">
        <Container>
          <Link to={'/'} className='navbar-brand p-2 rounded-2 bg-primary text-light'>New-Store</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5 ">
              <Link className='nav-link' to={'/'}>Product</Link>
              <Link className='nav-link' to={'cart'}>Cart-{cartItems}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation