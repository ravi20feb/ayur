import Image from 'next/image';
import Link from 'next/link';
import footerlogo from "../../../public/images/logo.png";
import "../../../public/sass/pages/footer.scss"
import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkedAlt, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
        <div className='footer_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className='footer_inner'>
                        <div className='upper_section'>
                            <Row>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
                                    <div className='left_section'>
                                        <div className='footer_logo'>
                                            <Image src={footerlogo} fill  alt='footer_logo'/>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Diam ullamcorper pellentesque euismod porttitor et nulla.</p>
                                    </div>
                                </Col>
                                <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <div className='right_section'>
                                        <Row >
                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={6}>
                                                <div className='link_list'>
                                                    <h3>Pages</h3>
                                                    <ul>
                                                        <li><Link href={"/"}>Home</Link></li>
                                                        <li><Link href={"/"}>Products</Link></li>
                                                        <li><Link href={"/"}>My Cart</Link></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={6}>
                                                <div className='link_list'>
                                                    <h3>Quick Links</h3>
                                                    <ul>
                                                        <li><Link href={"/"}>Terms & Condition</Link></li>
                                                        <li><Link href={"/"}>Privacy Policy</Link></li>
                                                        <li><Link href={"/"}>Cancellation Policy</Link></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={6}>
                                                <div className='link_list '>
                                                    <h3>Follows Us</h3>
                                                    <ul className='social_area'>
                                                        <li>
                                                            <Link href={"/"}>
                                                                <FontAwesomeIcon  className='icon'  icon={faFacebookF} />
                                                                <h5>facebook/</h5>
                                                            </Link>
                                                        </li>
                                                        <li>    
                                                            <Link href={"/"}>
                                                            <FontAwesomeIcon className='icon' icon={faInstagram} />
                                                            <h5>Instagram</h5>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            
                                                            <Link href={"/"}>
                                                                <FontAwesomeIcon className='icon' icon={faTwitter} />
                                                                <h5>Twitter</h5>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={6}>
                                                <div className='link_list'>
                                                    <h3>Quick Links</h3>
                                                    <ul className='social_area contact'>
                                                        <li><Link href={"/"}><FontAwesomeIcon className='icon'  icon={faEnvelope} /><h5>dummymail@example.com</h5></Link></li>
                                                        <li><Link href={"/"}><FontAwesomeIcon className='icon' icon={faPhoneAlt} /><h5>+91 670-103-3634</h5></Link></li>
                                                        <li><Link href={"/"}><FontAwesomeIcon className='icon' icon={faMapMarkerAlt} /><h5>U-105, Model Town, Mandvi, Nagpur, Maharashtra, 853001</h5></Link></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='footer_bottom'>
                            © 2024 All Rights Reserved Powered by Globiz Technology
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>   
    </div>
  )
}
