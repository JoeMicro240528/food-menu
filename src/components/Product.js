import React, { useEffect } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../rtk/slice/produts-slice';
import { addToCart } from '../rtk/slice/cart-slice';

const Product = () => {
    const products = useSelector((state)=> state.products);
    console.log(products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    },[])
    return (
        <Container  >
            <div className='my-5 py-5'>
                <h1 className='text-center'>Welcome to the Store</h1>
                <p className='text-center'>Explore our products and add them to your cart.</p>
            </div>
            <Row >
                {products.map((product) => (
                    <Col  key={product.id} className='mb-4 '>
                        <Card className='mx-auto text-center' style={{ width: '18rem'}}>
                            <Card.Img className='mx-auto' style={{height: '300px' }} variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title.substring(0,12)}</Card.Title>
                                <Card.Text>
                                    {product.description.substring(0, 50)}...  
                                    <span className='text-primary'>Read More</span>
                                </Card.Text>
                                <Button variant="primary" onClick={()=> dispatch(addToCart(product))}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Product