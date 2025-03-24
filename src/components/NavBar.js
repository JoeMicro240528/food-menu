import React, { useState } from 'react'
import { Row, Navbar, Form, Container } from 'react-bootstrap'

const NavBar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const onSearch = () => {
    if (searchValue !== '') {
      filterBySearch(searchValue)
    }
  }
  return (
    <Row>
      <Navbar expand="lg" className="bg-dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#">
            <div className='brand-color'>مطعم جديد </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex me-auto">
              <Form.Control
                type="text"
                placeholder="ابحث.."
                className="ms-2 "
                aria-label="Search"
                value={searchValue}
                onChange={(e) => {
                  e.preventDefault()
                  setSearchValue(e.target.value)
                  onSearch()
                }}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar
