import React, { FC, useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface MemberProps {}

const Member: FC<MemberProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <>

    <Container>

      <Row className='align-items-center'>
        <Col xs={10} sm={10} md={11}>
          <h3 className='ms-3 mt-3'>Member Benefits</h3>
        </Col>
        <Col xs={2} sm={2} md={1}>
          <div className='d-flex justify-content-end'>
            <button 
              type="button" 
              className="btn btn-secondary rounded-pill me-2" 
              onClick={scrollLeft}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button 
              type="button" 
              className="btn btn-secondary  rounded-pill me-3" 
              onClick={scrollRight}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </Col>
      </Row>

      <div style={{scrollbarWidth:'none'}} className='m-3 gap-3 d-flex overflow-auto' ref={scrollRef}>
        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg" alt="Card image" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>Member Product</Card.Text>
              <Card.Title>Your Exclusive Access</Card.Title>
              <Button className='rounded-pill' variant="light">Shop</Button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png" alt="Card image" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>Nike By You</Card.Text>
              <Card.Title>Your Customisation Service</Card.Title>
              <Button className='rounded-pill' variant="light">Customise</Button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/512ededc-208b-4399-8369-88859a3c3b8e/image.png" alt="Card image" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>Member Rewards</Card.Text>
              <Card.Title>How We Say Thank You</Card.Title>
              <Button className='rounded-pill' variant="light">Celebrate</Button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>Member Days</Card.Text>
              <Card.Title>A Celebration Of You</Card.Title>
              <Button className='rounded-pill' variant="light">Learn more</Button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>Sport & Wellness App</Card.Text>
              <Card.Title>Movement Where You Are</Card.Title>
              <Button className='rounded-pill' variant="light">Move</Button>
            </div>
          </Card.ImgOverlay>
        </Card>

        <Card style={{ maxWidth: '30rem',flex:'0 0 70%' }} className="text-white">
          <Card.Img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/c17ae904-9307-4575-8ac1-ad08adafe17f/nike-just-do-it.jpg" />
          <Card.ImgOverlay className='d-flex align-items-end'>
            <div className='ms-3 mb-3'>
              <Card.Text>SNKRS</Card.Text>
              <Card.Title>Your Ultimate Sneakers Community</Card.Title>
              <Button className='rounded-pill' variant="light">Explore</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
      </Container>
    </>
  );
};

export default Member;
