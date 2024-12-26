import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import Image from 'next/image';
import plant from '../../../public/images/plant.png';
import circle from '../../../public/images/circle.png';
import '../../../public/sass/pages/benefit.scss'

export default function Benefit() {
  return (
    <div className='benefit_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className='benefit_inner'>
                        <div className='heading_section'>
                            <div className='icon'>
                                <Image src={plant} alt='plant' fill />
                            </div>
                            <div className='heading_text'>
                                <span>Health Benefits of <span className='text_green'>Shilajit</span></span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                </p>
                            </div>
                            
                            
                        </div>
                        <div className='image_section'>

                            <Image src={circle}  alt='benefit of shilajit' fill/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
