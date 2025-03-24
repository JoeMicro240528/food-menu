import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Catigore = ({ filterByCategory , catergory }) => {
  const onFilter = (cat)=>{
    filterByCategory(cat)
  }

   useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 150,
      });
    }, [])
  return (
    <Row>
      <div className='d-flex justify-content-center my-3'>
        {
          catergory.length >= 1 &&
          catergory.map(cat => {
            return <button data-aos="zoom-in-right" onClick={()=>onFilter(cat)} style={{ border: "1px solid  rgb(180, 91, 53)" }} className='btn mx-2'>{cat}</button>})}
      </div>
    </Row>
  )
}

export default Catigore
