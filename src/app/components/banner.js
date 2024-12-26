import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../../public/sass/pages/banner.scss"
import newbn from '../../../public/images/newbn.png'
import bnlc from "../../../public/images/bnl.png"
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='banner_section'>
        <div className='img_wrapper'>
            <Image src={newbn} width={420} height={0} alt='banner'  />
        </div>
        <div className='bnl_img'>
            <Image src={bnlc} width={80} height={80} alt='banner_corner'/>
        </div>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className='banner_inner'>
                        <Row>
                            <Col xxl={6} xl={7} lg={7} md={6} sm={8} xs={12}>
                                    <div className='banner_content'>
                                        <h3>
                                        Step Closer to Health with Ayurve
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur. Morbi sed vulputate aliquam risus blandit curabitur nibh. Eu dui morbi urna sed vulputate neque vulputate id sit. Est nulla massa quis fermentum 
                                        </p>
                                        <div className='button_section'>
                                            <div className='btn_link signin  active'>
                                                <Link href={'/'}>Sign In</Link>
                                            </div>
                                            <div className='btn_link login'>
                                                <Link href={'/'}>Buy Now</Link>
                                            </div>
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
