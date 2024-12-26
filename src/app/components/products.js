import Image from 'next/image';
import React from 'react';
import "../../../public/sass/pages/products.scss"
import { Col, Container, Row } from 'react-bootstrap';
import product1 from "../../../public/images/product1.png";
import product2 from "../../../public/images/prodzuct2.png";
import product3 from "../../../public/images/product3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Products() {
  return (
    <div className='products_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} >
                    <div className='products_inner'>
                        <div className='products_upper'>
                            <div className='text_area'>
                                <span>Our </span>
                                <span>Products</span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                </p>
                            </div>
                        </div>
                        <div className='products_cards'>
                            <div className='card first active '>
                                <div className='image_section'>
                                    <div className='image_inner'>
                                        <Image src={product1}  alt='product1' fill quality={80}/>
                                    </div>
                                </div>
                                <div className='product_detail_section'>
                                    <h3> Pure Himalayan Shilajit</h3>
                                    <div className='product_detail'>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                        </p>
                                        <div className='icon'>
                                            <FontAwesomeIcon className='right_arrow' icon={faAngleRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='second card'>
                                <div className='image_section'>
                                    <div className='image_inner'>
                                        <Image src={product2}  alt='product1' fill quality={80}/>
                                    </div>
                                </div>
                                <div className='product_detail_section'>
                                    <h3>Pure Himalayan Shilajit</h3>
                                    <div className='product_detail'>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                        </p>
                                        <div className='icon'>
                                            <FontAwesomeIcon className='right_arrow' icon={faAngleRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='third card'>
                                <div className='image_section'>
                                    <div className='image_inner'>
                                        <Image src={product3}  alt='product1' fill quality={80}/>
                                    </div>
                                </div>
                                
                                <div className='product_detail_section'>
                                    <h3>Pure Himalayan Shilajit</h3>
                                    <div className='product_detail'>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                        </p>
                                        <div className='icon'>
                                            <FontAwesomeIcon  className='right_arrow' icon={faAngleRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
