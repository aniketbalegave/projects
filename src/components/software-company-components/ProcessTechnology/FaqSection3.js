
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

const FaqSection3 = (props) => {

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
                            {/* <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                                Working Process
                            </div> */}
                            <h2 className="heading_text mb-0">
                                Our <mark>  SEO Services </mark>
                            </h2>
                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. On-Page SEO
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                <p className="m-0">
                                       { serviceData.ope}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Off-Page SEO
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.ops}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Technical SEO
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.ts}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Keyword Research & Optimization
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.krp}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Content Creation & Optimization
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.cco}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="6">
                                    06. Local SEO
                                </AccordionHeader>
                                <AccordionBody accordionId="6" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.ls}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="7">
                                    07. E-commerce SEO
                                </AccordionHeader>
                                <AccordionBody accordionId="7" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.es}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="8">
                                    08. SEO Audits
                                </AccordionHeader>
                                <AccordionBody accordionId="8" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.sa}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="9">
                                    09. SEO Analytics & Reporting
                                </AccordionHeader>
                                <AccordionBody accordionId="9" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.sar}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="10">
                                    10. Voice Search Optimization
                                </AccordionHeader>
                                <AccordionBody accordionId="10" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.vso}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="11">
                                    11. App Store Optimization (ASO)
                                </AccordionHeader>
                                <AccordionBody accordionId="11" className='acc_body'>
                                    <p className="m-0">
                                        {serviceData.aso}
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>On-Page SEO</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Off-Page SEO </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Technical SEO</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Keyword Research & Optimization</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>Content Creation & Optimization</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="6"><span>Local SEO</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="7"><span>E-commerce SEO</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="8"><span>SEO Audits</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="9"><span>SEO Analytics & Reporting</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="10"><span>Voice Search Optimization </span></AccordionHeader></li>
                                <li><AccordionHeader targetId="11"><span>App Store Optimization (ASO)</span></AccordionHeader></li>
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
export default FaqSection3;
