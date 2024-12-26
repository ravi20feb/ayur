import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Accord from './accord';
import "../../../public/sass/pages/faq.scss"

export default function Questions() {
    return (
        <div className='faq_section'>
            <Container>
                <Row>
                    <Col>
                        <div className='faq_inner'>
                            <div className='upper_section'>
                                <span>Frequently Asked <span className='txt_diff'>Questions</span></span>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Purus rhoncus in urna maecenas blandit.
                                </p>
                            </div>
                            <div className='bottom_section'>
                            <Accord />
                            
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
