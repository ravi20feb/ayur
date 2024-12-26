import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import  "../../../public/sass/pages/feature.scss"
import leafn from "../../../public/images/leafn.png"
import leaf from "../../../public/images/leaf.png"
import clock from "../../../public/images/clock.png"
import lab from "../../../public/images/lab.png"

export default function OrganicFeature() {
    return (
        <section className="feature_section">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} sm={12} xs={12} >
                        <div className="feature_inner">
                            <ul>
                                <li>
                                    <div className="list_content">
                                        <div className="icon">
                                            <Image src={leafn} alt="orgainic" width={45} height={45} />
                                        </div>
                                        <h5>100% Ayurvedic</h5>
                                    </div>
                                </li>
                                <li>

                                    <div className="list_content">
                                        <div className="icon">
                                            <Image src={leaf} alt="orgainic" width={45} height={45} />
                                        </div>
                                        <h5>Vegan friendly</h5>

                                    </div>

                                </li>
                                <li>
                                <div className="list_content">

                                    <div className="icon">
                                        <Image src={lab} alt="orgainic" width={45} height={45} />
                                    </div>
                                    <h5>100% GMO Free</h5>
                                </div>
                                </li>
                                <li>
                                <div className="list_content">

                                    <div className="icon">
                                        <Image src={clock} alt="orgainic" width={45} height={45} />
                                    </div>
                                    <h5>Safe for long term use</h5>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
