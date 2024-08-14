import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
interface HomeProps {
  
}

const Home: FC<HomeProps> = ({}) => {
  return (
    <>
    <Container>


      <Row>

    <Col xs={12} md={12}>
    
    <img className='img-fluid'
      src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1714,c_limit/b29b4905-2da2-48b3-bda8-9eb33333795c/nike-just-do-it.png " alt="no image" />
    
    </Col>

      </Row>

      
    <div>

    <h6 className='text-center mt-4'>Nike Electric Park</h6>

    <h1 className='text-center fw-bolder'>WIN ON AIR</h1>

    <h5 className='text-center mt-2'>Engineered for those who stand out</h5>

    <div className='d-flex justify-content-center gap-2 mt-4'>

    <Button className='rounded-pill fw-semibold' variant="dark">Experience Air</Button>
    <Button className='rounded-pill fw-semibold' variant="dark">Shop Air</Button>

   

    </div>

    
   
   

    </div>

    </Container>


    </>
  );
};

export default Home;