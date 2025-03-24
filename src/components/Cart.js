import React, { useEffect } from 'react'
import { Card, Row ,Col} from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cart = ({item}) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 150,
    });
  }, [])
  return (
    <div>
      <Row data-aos="zoom-in-right" className='my-3'>
        <Col sm={12}>
          <Card className="p-0 justify-content-md-center d-flex flex-row bg-transparent">
            <Card.Img  className='img-item d-flex' variant="top" src={item.imgUrl} />
            <Card.Body>
              <div className='d-flex justify-content-between'>
              <Card.Title className='item-title'>{item.title}</Card.Title>
               <p className='item-price'>{item.price}</p>
              </div>
              <Card.Text className='item-description'>
             { item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Cart