import Image from 'next/image'
import React from 'react';
import '../../../public/sass/pages/buynow.scss'
import { Col, Container, Row } from 'react-bootstrap'
import product2 from '../../../public/images/product3.png'
import Link from 'next/link';

export default function Buynow() {
  return (
    <div className='buy_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className='buynow_inner'>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={12}>
                                <div className='image_section'>
                                    <Image src={product2} alt='product_image' fill/>
                                </div>
                            </Col>
                            <Col xxl={9} xl={9} lg={9} md={9} sm={9} xs={12}>
                                <div className='text_section'>
                                    <h3>Introducing best Product for Body Power</h3>
                                    <p>
                                        100% Pure Shilajit from Great Mountains of himalayas
                                    </p>
                                    <div className='buy_link'>
                                        <Link href={"#"}>Buy Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
