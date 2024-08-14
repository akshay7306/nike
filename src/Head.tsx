import React, { FC } from 'react';
import { Form, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

interface HeadProps {}

const Head: FC<HeadProps> = ({}) => {
  return (
    <Navbar expand='lg' className='d-flex py-2 position-sticky top-0 bg-white' style={{zIndex:1030}}>
    <Container>
      
        <Navbar.Brand href="#home">
          <img 
            width="60"
            height="50"
            alt="no image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4DUBOQXev1B62Y3Qoi_eJCWQ0RqePgvh0NQ&s"
          />
        </Navbar.Brand>

      <div className='d-flex align-items-center me-3 ms-auto'>
      <Navbar.Toggle aria-controls="navbar-nav" className='d-lg-none' />
      </div>

        
        <Navbar.Collapse id="navbar-nav">
          <Nav className='me-auto ms-5 mb-2 mb-lg-0'>
            <Nav.Link className='fw-bolder'>New & Featured</Nav.Link>
            <Nav.Link className='fw-bolder'>Men</Nav.Link>
            <Nav.Link className='fw-bolder'>Women</Nav.Link>
            <Nav.Link className='fw-bolder'>Kids</Nav.Link>
            <Nav.Link className='fw-bolder'>Sale</Nav.Link>
            <Nav.Link className='fw-bolder'>Customize</Nav.Link>
            <Nav.Link className='fw-bolder'>SNKRS</Nav.Link>
          </Nav>

          <Form
            className='d-flex ms-lg-5 mb-2 mb-lg-0 me-3'
            style={{ position: 'relative' }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              className='bg-light'
              style={{
                width: '200px', // Adjust width as needed
                paddingLeft: '2.5rem', // Space for the icon
                borderRadius: '50px',
                borderColor: '#ced4da'
              }}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              style={{
                position: 'absolute',
                top: '50%',
                left: '0.75rem', // Adjust according to the padding
                transform: 'translateY(-50%)',
                color: '#6c757d'
              }}
            ></i>
          </Form>
        </Navbar.Collapse>

        <div className='d-flex align-items-center  d-lg-flex'>
       
            <i className="fa-regular fa-heart me-3"></i>
            <i className="fa-solid fa-bag-shopping"></i>
         
        </div>
        </Container>
      </Navbar>
    
  );
};

export default Head;
