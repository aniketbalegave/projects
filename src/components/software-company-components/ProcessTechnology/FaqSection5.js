
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_line_2.svg'
import shape2 from '../../../images/shapes/shape_line_3.svg'
import shape3 from '../../../images/shapes/shape_line_4.svg'
import shape4 from '../../../images/shapes/shape_space_3.svg'
import Services from 'd:/shreeRevaTech/projects/projects/src/api/service';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import TechnologySection from '../TechnologySection/TechnologySection';
import Testimonial from '../Testimonial/Testimonial';

const FaqSection5 = (props) => {

    const { slug } = useParams();
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const serviceData = Services.find((service) => service.slug === slug);

    return (
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                             <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                Working Process
                            </div> 
                            <h2 className="heading_text mb-0">
                                Our <mark> Approch</mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. Issue Identification
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                <p className="m-0">
                                       { serviceData.issue}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Updates and Upgrades
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.uau}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Performance Monitoring
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.pm}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Security Enhancements
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.se}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Ongoing Support
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.os}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span> Issue Identification</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Updates and Upgrades</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Performance Monitoring                                </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Security Enhancements                                </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>Ongoing Support                                </span></AccordionHeader></li>
                            </ul>
                        </Accordion>
                    </div>
                </div>
                <TechnologySection/>
                <Testimonial/>
            </div>

            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <img src={shape3} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_4">
                <img src={shape4} alt="Techco Shape" />
            </div>
        </section>
    )
};
export default FaqSection5;
