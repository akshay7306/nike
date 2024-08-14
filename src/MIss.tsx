import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface MIssProps {}

const MIss: FC<MIssProps> = () => {
  return (
    <Container className='mt-5'>
      <Row className='mt-5'>
        <Col>
          <h3 className='mt-3'>Don't Miss</h3>
        </Col>
      </Row>
      <Row className='g-0 mt-3'>
        <Col lg={6} md={12} className='p-0'>
          <img
            className='img-fluid w-100'
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/f40835b4-6b6a-460c-b651-6f08e976ee99/nike-just-do-it.png"
            alt="no image"
          />
        </Col>
        <Col lg={6} md={12} className='p-0'>
          <img
            className='img-fluid w-100'
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/7315b92e-0b25-44d9-ab99-ed397473a0be/nike-just-do-it.png"
            alt="no image"
          />
        </Col>
      </Row>
      <div className='text-center mt-4'>
        <p className='fw-medium'>'Sol'</p>
        <h1 className='fw-bolder'>AIR JORDAN 39</h1>
        <p>
          Not just another shoe. It's the Air Jordan 39. HIS 39. Crafted to honor MJ's domination of the game. Exactly what you need to keep 'em shook.
        </p>
        <Button className='rounded-pill fw-semibold' variant="dark">
          Shop
        </Button>
      </div>
    </Container>
  );
};

export default MIss;
