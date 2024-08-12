import React, { FC, useRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface FeatureProps {}

const Feature: FC<FeatureProps> = () => {
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
        <Container fluid>
            <div className='mt-5'>
                <Row>
                    <Col xs={8} sm={10}>
                        <h3 className='ms-4 mt-5'>Featured</h3>
                    </Col>
                    <Col xs={4} sm={2}>
                        <div className='d-flex justify-content-end align-items-center mt-5'>
                            <button 
                                type="button" 
                                className="btn btn-secondary rounded-pill" 
                                onClick={scrollLeft}
                            >
                                <MdKeyboardArrowLeft />
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-secondary ms-1 rounded-pill" 
                                onClick={scrollRight}
                            >
                                <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </Col>
                </Row>
                <div className='d-flex m-3 mt-5 overflow-x-auto' ref={scrollRef} style={{ scrollBehavior: 'smooth' }}>
                    <div className='d-flex'>
                        <Card className='m-2 border-0 flex-shrink-0' style={{ flex:'0 0 70%', maxWidth: "30rem" }}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/7315b92e-0b25-44d9-ab99-ed397473a0be/nike-just-do-it.png" />
                            <Card.Body>
                                <Card.Text><b>subrina 2 'United'</b></Card.Text>
                                <Card.Title>Made For Hoopers Who Do It All</Card.Title>
                                <a href="#" className='text-dark'><b>shop</b></a>
                            </Card.Body>
                        </Card>

                        <Card className='m-2 border-0 flex-shrink-0' style={{ maxWidth: "30rem",flex:'0 0 70%' }}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/8bbfc659-d59a-43d9-aa52-b8d0bbd7dc83/nike-just-do-it.jpg" />
                            <Card.Body>
                                <Card.Text><b>Air Max 90</b></Card.Text>
                                <Card.Title>For Your 90s Vibe</Card.Title>
                                <a href="#" className='text-dark'><b>shop</b></a>
                            </Card.Body>
                        </Card>

                        <Card className='m-2 border-0 flex-shrink-0' style={{maxWidth: "30rem",flex:'0 0 70%' }}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/f40835b4-6b6a-460c-b651-6f08e976ee99/nike-just-do-it.png" />
                            <Card.Body>
                                <Card.Text><b>Nike Skateboarding</b></Card.Text>
                                <Card.Title>Make Them Your Own</Card.Title>
                                <a href="#" className='text-dark'><b>shop</b></a>
                            </Card.Body>
                        </Card>

                        <Card className='m-2 border-0 flex-shrink-0' style={{ maxWidth: "30rem",flex:'0 0 70%' }}>
                            <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/4ff6b863-2558-4c8e-abcc-71141166f330/nike-just-do-it.png" />
                            <Card.Body>
                                <Card.Text><b>Nike Windrunner Tracksuit</b></Card.Text>
                                <Card.Title>Suit Yourself</Card.Title>
                                <a href="#" className='text-dark'><b>shop</b></a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Feature;
