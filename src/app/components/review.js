import Image from 'next/image'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import p1 from "../../../public/images/p1.jpeg"

import "../../../public/sass/pages/rewies.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar ,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as star }  from '@fortawesome/free-regular-svg-icons';
import { userAgent } from 'next/server';
const users = [
    {
        id:1,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p1.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 4.5
    },
    {
        id:2,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p2.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 1.5
    },
    {
        id:3,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p4.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 2.3
    },
    {
        id:4,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/3.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 4.5
    },
    {
        id:5,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p1.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 4.5
    },
    {
        id:6,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p2.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 1.5
    },
    {
        id:7,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/p4.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 2.3
    },
    {
        id:8,
        name:"Sanjay Ahluwalia",
        profile_img: "/images/3.jpeg",
        review: "Lorem ipsum dolor sit amet consectetur. Pellentesque mauris sed elementum metus imperdiet. Pharetra sapien viverra viverra odio eget integer volutpat. Sollicitudin ut cras urna curabitur venenatis vestibulum mi. Tellus aliquam cursus lacus lorem sit scelerisque maecenas.",
        rating: 4.5
    }
]


export default function Revies() {
    
  return (
    <div className='reviews_section'>
        <Container>
            <Row>
                <Col xxl={12} xl={12} lg={12} sm={12} md={12} xs={12}>
                    <div className='reviews_inner'>
                        <Row>
                            {
                                users.length > 0 && users.map((item,index)=>{
                                    const rating = item.rating;
                                    const full = Math.floor(rating);
                                    const half = rating % 1 >= .5 ;
                                    const empty = 5 - full - (half ? 1 : 0 )
                                    console.log(Array(full))
                                    console.log(empty)
                                    return <Col key={item.id} xxl={3} xl={3} lg={3} sm={6} md={4} xs={12}>
                                        <div className='review_content'>
                                            <div className='text_area'>
                                                {item.review}
                                            </div>
                                            <div className='review_profile'>
                                                <div className='profile_img'>
                                                    <Image src={item?.profile_img} alt='profile_image' fill/>
                                                </div>
                                                <div className='profile_details'>
                                                    <h4>{item.name}</h4>
                                                    <ul>
                                                    {/* review star list start */}
                                                        {   
                                                            [...Array(full)].map((index)=>{
                                                                return(
                                                                    <li className='full_start' key={rating - index}>
                                                                        <FontAwesomeIcon  className='start_icon'  icon={faStar}/>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        {half && <li>
                                                                    <FontAwesomeIcon  className='start_icon'  icon={faStarHalfAlt}/>
                                                                </li>}
                                                        {
                                                            [...Array(empty)].map((_,index)=>{
                                                                return (
                                                                    <li className="half_star" key={index}>
                                                                        <FontAwesomeIcon  className='start_icon'  icon={star}/>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        {/*  review star list end*/}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                })
                            }
                            
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
