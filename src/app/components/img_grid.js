import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../../public/sass/pages/grid_section.scss'
import p1 from '../../../public/images/g1.png'
import p2 from '../../../public/images/g2.png'
import p3 from '../../../public/images/g3.png'
import p4 from '../../../public/images/g4.png'
import p5 from '../../../public/images/g5.png'


export default function GridSection () {
  return (
    <div className="grid_section">
        <Container>
            <Row>
                <Col>
                    <div className='grid_inner'>
                        <Row>
                            <Col xxl={3} xl={4} lg={4} md={4} sm={7} xs={12}>
                            
                                
                                <div className='content_area'>
                                    <h3><span>Why</span> Roboveda ?</h3>
                                    <div className='text'>Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.</div>
                                </div>
                                <div className='image_main img_one'>
                                    <div className='img_area'>
                                        <Image src={p1} title='...' alt='...' height={420} width={0} />
                                    </div>
                                    <div className='title_area'>
                                        <h4>Safe for long <span>term use</span></h4>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={6} xl={4} lg={4} md={4} sm={5} xs={12}>
                                
                                    <div className='image_main img_two'>
                                        <div className='img_area'>
                                            <Image src={p3} title='...' alt='...' height={370} width={0} />
                                        </div>
                                        <div className='title_area'>
                                            <h4>Safe for long <span>term use</span></h4>
                                        </div>
                                    </div>
                                    <div className='image_main img_three'>
                                        <div className='img_area'>
                                            <Image src={p5} title='...' alt='...' height={194} width={0} />
                                        </div>
                                        <div className='title_area'>
                                            <h4>Safe for long <span>term use</span></h4>
                                        </div>
                                    </div>

                                
                            </Col>
                            <Col xxl={3} xl={4} lg={4} md={4} sm={12} xs={12}>
                                
                                    <div className='image_main img_four'>
                                        <div className='img_area'>
                                            <Image src={p2} title='...' alt='...' height={300} width={0} />
                                        </div>
                                        <div className='title_area'><h4>Safe for long <span>term use</span></h4></div>
                                    </div>
                                    <div className='image_main img_five'>
                                        <div className='img_area'>
                                            <Image src={p4} title='...' alt='...' height={268} width={0} />
                                        </div>
                                        <div className='title_area'>
                                            <h4>Safe for long <span>term use</span></h4>
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
