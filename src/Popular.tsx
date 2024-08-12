import React, { FC, useRef } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface PopularProps {}

const Popular: FC<PopularProps> = ({}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // Adjust the scroll value as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust the scroll value as needed
    }
  };

  return (
    <Container fluid className="px-3">
      <Row className="align-items-center my-5">
        <Col xs={8} sm={10}>
          <h3>Popular Right Now</h3>
        </Col>
        <Col xs={4} sm={2} className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="rounded-pill me-2"
            onClick={scrollLeft}
          >
            <MdKeyboardArrowLeft />
          </Button>
          <Button
            variant="secondary"
            className="rounded-pill"
            onClick={scrollRight}
          >
            <MdKeyboardArrowRight />
          </Button>
        </Col>
      </Row>

      <div
        ref={scrollRef}
        className="d-flex overflow-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {[
          {
            title: 'Nike Vaporfly 3 Electric',
            text: "Women's Road Racing Shoes",
            price: '₹ 21 395.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/467c9f92-2ced-40d1-b663-06b9089c1436/vaporfly-3-electric-road-racing-shoes-CvfhbR.png',
          },
          {
            title: 'Nike Invincible 3 Electric',
            text: "Men's Road Running Shoes",
            price: '₹ 17 595.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png',
          },
          {
            title: 'Nike InfinityRN 4 Electric',
            text: "Men's Road Running Shoes",
            price: '₹15 595.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png',
          },
          {
            title: 'Nike Pegasus 41 Electric',
            text: "Men's Road Running Shoes",
            price: '₹ 12 495.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png',
          },
          {
            title: 'Nike Icon',
            text: "Men's Woven Basketball Jacket",
            price: '₹ 3 995.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ddceaccc-4f2e-4cbd-84fc-b9053cb26c3f/icon-woven-basketball-jacket-8CZGX4.png',
          },
          {
            title: 'Nike Ultrafly',
            text: 'Trail Racing Shoes',
            price: '₹ 21 695.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/b10b5561-ff15-48a2-8fcb-e24daccc73a0/ultrafly-trail-racing-shoes-4DRfrN.png',
          },
          {
            title: 'Sabrina 2 EP',
            text: 'Basketball Shoes',
            price: '₹11 895.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/882c21ec-b405-4e45-92d3-111a108e0cf0/sabrina-2-ep-basketball-shoes-w6qwqM.png',
          },
          {
            title: 'Jordan Sport',
            text: "Men's Dri-FIT Sleeveless Top",
            price: '₹ 1 695.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/198ef57b-17dc-4964-9a69-c7f6d5babff5/jordan-sport-dri-fit-sleeveless-top-tbDKb2.png',
          },
          {
            title: 'Nike Phantom Luna 2 Elite Electric',
            text: 'FG High-Top Football Boot',
            price: '₹ 24 895.00',
            imgSrc:
              'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/641c2ad1-800d-469a-9b5b-55b69ec6be60/phantom-luna-2-elite-electric-fg-high-top-football-boot-X0prFC.png',
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="m-2 border-0"
            style={{ flex:'0 0 70%', maxWidth: '30rem' }}
          >
            <Card.Img variant="top" src={item.imgSrc} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.text} <br />
                <b>MRP : {item.price}</b>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Popular;
