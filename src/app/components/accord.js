import React from 'react';
import Accordion  from 'react-bootstrap/Accordion';
import { AccordionBody, AccordionItem, AccordionHeader } from 'react-bootstrap';

export  default function Accord() {
    return (
        <Accordion defaultActiveKey="0">
            <AccordionItem eventKey="0">
                <AccordionHeader>Lorem ipsum dolor sit amet consectetur. Eu orci in consequat aliquet a. Diam facilisis mauris sed nullam ?</AccordionHeader>
                <AccordionBody>
                Lorem ipsum dolor sit amet consectetur. Nec ut malesuada aenean ac fusce dictumst. Eu ac et dolor metus quis odio erat id. Enim enim massa molestie aliquam quam nunc vitae. Fusce urna urna et porttitor quis sagittis nunc venenatis pharetra.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
                <AccordionHeader>Lorem ipsum dolor sit amet consectetur. Sed aliquet elementum volutpat tempus in aliquam. Euismod aliquam cursus venenatis aenean pharetra risus cursus bibendum. Amet consectetur pellentesque faucibus nulla malesuada interdum maecenas. Sit eget fringilla neque cursus ?</AccordionHeader>
                <AccordionBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}
