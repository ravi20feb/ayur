import Image from "next/image";
import { Col, Container, Row,Form } from "react-bootstrap";
import logo from "../../../public/images/logo.png";
import "../../../public/sass/pages/header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";


export default function Header() {
  return (
    <div className="header_section">
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="header_inner">
                        <div className="logo_section">
                            <div className="logo">
                                <Image src={logo}   alt="logo"/>
                            </div>
                        </div>
                        <div className="right_section">
                                    <nav className="nav_link_section"> 
                                        <ul>
                                            <li className="active">
                                                <Link href={"/"}>
                                                    Home
                                                </Link>
                                            </li>
                                            <li >
                                                <Link href={"/"}>
                                                    About us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"/"}>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>                                   
                                    </nav>
                                    <div className="button_section">
                                        

                                            <div className="left_section">
                                                <div className="search icon_wrapper">
                                                <FontAwesomeIcon className="icon" icon={faSearch} />
                                                </div>
                                                <div className="cart icon_wrapper">
                                                    <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                                                </div>
                                            </div>
                                            
                                            <div className="right_area">
                                                <div className="user_icon">
                                                    <FontAwesomeIcon className="icon" icon={faUser} />
                                                </div>
                                                <h5>Hi ! User</h5>
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
