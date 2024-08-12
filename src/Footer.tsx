import React, { FC } from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import { CiGlobe } from "react-icons/ci";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Container fluid className="bg-light py-4">
      <Row className="text-center text-md-left">
        <Col xs={12} md={4} lg={3}>
          <h6 className="text-uppercase">Resources</h6>
          <div className='mt-3'>
            <NavLink href="#">Find A Store</NavLink><br/>
            <NavLink href="#">Become A Member</NavLink><br/>
            <NavLink href="#">Send Us Feedback</NavLink>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <h6 className="text-uppercase">Help</h6>
          <div className='mt-3'>
            <NavLink href="#">Get Help</NavLink><br/>
            <NavLink href="#">Order Status</NavLink><br/>
            <NavLink href="#">Delivery</NavLink><br/>
            <NavLink href="#">Returns</NavLink><br/>
            <NavLink href="#">Payment Options</NavLink><br/>
            <NavLink href="#">Contact Us On Nike.com Inquiries</NavLink><br/>
            <NavLink href="#">Contact Us On All Other Inquiries</NavLink>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <h6 className="text-uppercase">Company</h6>
          <div className='mt-3'>
            <NavLink href="#">About Nike</NavLink><br/>
            <NavLink href="#">News</NavLink><br/>
            <NavLink href="#">Careers</NavLink><br/>
            <NavLink href="#">Investors</NavLink><br/>
            <NavLink href="#">Sustainability</NavLink>
          </div>
        </Col>
        <Col xs={12} md={12} lg={3} className="d-flex  justify-content-center mt-3 mt-md-0">
          <NavLink href="#"> <CiGlobe /> India</NavLink>
        </Col>
      </Row>
      <Row className="text-center mt-4">
        <Col>
          <p>&copy; 2024 Nike, Inc. All rights reserved</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
