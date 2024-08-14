import React, { FC, useRef } from 'react';
import { Card, Container } from 'react-bootstrap';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface FeatureProps { }

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
        <Container className='mt-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h3 className='ms-1'>Featured</h3>
                <div className='d-flex'>
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
                        className="btn btn-secondary rounded-pill" 
                        onClick={scrollRight}
                        style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <div className='d-flex mt-4 overflow-x-auto' ref={scrollRef} style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}>
                <div className='d-flex'>
                    <Card className='m-2 border-0 flex-shrink-0' style={{ flex: '0 0 70%', maxWidth: '30rem' }}>
                        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/7315b92e-0b25-44d9-ab99-ed397473a0be/nike-just-do-it.png" />
                        <Card.Body>
                            <Card.Text><b>Subrina 2 'United'</b></Card.Text>
                            <Card.Title>Made For Hoopers Who Do It All</Card.Title>
                            <a href="#" className='text-dark'><b>Shop</b></a>
                        </Card.Body>
                    </Card>

                    <Card className='m-2 border-0 flex-shrink-0' style={{ maxWidth: '30rem', flex: '0 0 70%' }}>
                        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/8bbfc659-d59a-43d9-aa52-b8d0bbd7dc83/nike-just-do-it.jpg" />
                        <Card.Body>
                            <Card.Text><b>Air Max 90</b></Card.Text>
                            <Card.Title>For Your 90s Vibe</Card.Title>
                            <a href="#" className='text-dark'><b>Shop</b></a>
                        </Card.Body>
                    </Card>

                    <Card className='m-2 border-0 flex-shrink-0' style={{ maxWidth: '30rem', flex: '0 0 70%' }}>
                        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/f40835b4-6b6a-460c-b651-6f08e976ee99/nike-just-do-it.png" />
                        <Card.Body>
                            <Card.Text><b>Nike Skateboarding</b></Card.Text>
                            <Card.Title>Make Them Your Own</Card.Title>
                            <a href="#" className='text-dark'><b>Shop</b></a>
                        </Card.Body>
                    </Card>

                    <Card className='m-2 border-0 flex-shrink-0' style={{ maxWidth: '30rem', flex: '0 0 70%' }}>
                        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_672,c_limit/4ff6b863-2558-4c8e-abcc-71141166f330/nike-just-do-it.png" />
                        <Card.Body>
                            <Card.Text><b>Nike Windrunner Tracksuit</b></Card.Text>
                            <Card.Title>Suit Yourself</Card.Title>
                            <a href="#" className='text-dark'><b>Shop</b></a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Feature;
