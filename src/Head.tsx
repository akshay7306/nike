import React, { FC } from 'react';
import { Col, Form, Nav, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface HeadProps {}

const Head: FC<HeadProps> = ({}) => {
  return (
    <>
     <Container>
      <Navbar expand='lg' className='d-flex py-2'>
       
          <Navbar.Brand href="#home">
            <img 
              width="30"
              height="30"
              alt="no image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DUBOQXev1B62Y3Qoi_eJCWQ0RqePgvh0NQ&s"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className='me-auto mb-2 mb-lg-0'>
              <Nav.Link className='fw-bolder'>New & Featured</Nav.Link>
              <Nav.Link className='fw-bolder'>Men</Nav.Link>
              <Nav.Link className='fw-bolder'>Women</Nav.Link>
              <Nav.Link className='fw-bolder'>Kids</Nav.Link>
              <Nav.Link className='fw-bolder'>Sale</Nav.Link>
              <Nav.Link className='fw-bolder'>Customize</Nav.Link>
              <Nav.Link className='fw-bolder'>SNKRS</Nav.Link>
            </Nav>

            <Form className='d-flex ms-lg-5 mb-2 mb-lg-0'>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className='me-2'
              />
            </Form>

            <div className='d-flex align-items-center'>
              <i className="fa-regular fa-heart me-3"></i>
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
          </Navbar.Collapse>
        
      </Navbar>
      </Container>
    </>
  );
};

export default Head;
