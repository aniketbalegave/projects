
import React, { useState } from 'react';
import Bg from '../../../images/shapes/shape_title_under_line.svg'
import shape1 from '../../../images/shapes/shape_space_4.svg'
import shape2 from '../../../images/shapes/shape_angle_3.webp'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="faq_section section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${Bg})` }}>
                        F.A.Q.
                    </div>
                    <h2 className="heading_text mb-0">
                        Need a <mark>Support?</mark>
                    </h2>
                </div>

                <div className="faq_accordion accordion" id="faq_accordion">
                    <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="1">
                            Q. How to choose a software development company?
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                A custom software development company specializes in creating unique software solutions from scratch, tailored to your specific business needs. Additionally, these companies offer various other services, such as:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Web and mobile app development
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Software architecture
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT consulting and audit
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Legacy system modernization
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Cloud computing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="2">
                                Q. What is a custom software development company?
                            </AccordionHeader>
                            <AccordionBody accordionId="2" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p align="justify">
                                A custom software development company is a provider that creates software solutions specifically tailored to meet the unique requirements of businesses. These companies handle the entire software lifecycle, from concept and design to development, testing, and deployment, ensuring a solution that fits perfectly with your business objectives.
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Web and mobile app development
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Software architecture
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT consulting and audit
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Legacy system modernization
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Cloud computing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="3">
                                Q. Why do businesses need custom software development?
                            </AccordionHeader>
                            <AccordionBody accordionId="3" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                Custom software development enables businesses to:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Address specific challenges unique to their operations.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Increase efficiency with tailored solutions.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Gain a competitive edge through innovation.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Scale their systems as they grow.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Integrate seamlessly with existing processes and tools.

                                                </span>
                                            </li>
                                            {/* <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="4">
                                Q. How much does custom software development cost?
                            </AccordionHeader>
                            <AccordionBody accordionId="4" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                The cost of custom software development varies depending on several factors, such as:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                The complexity of the project.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                The technologies used.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                The scope of features and functionality.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                The timeline for development.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                The geographical location of the development team.
                                                </span>
                                            </li>
                                           
                                            <p align="justify">It’s essential to discuss your project requirements with the company to get a detailed estimate.</p>
                                           
                                        
                                            {/* <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="5">
                                Q. Why custom software development is important?
                            </AccordionHeader>
                            <AccordionBody accordionId="5" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    A custom software development company is a vendor that builds unique software from scratch. Also, such vendors provide a range of other useful services like software upgrades,Here is an extended list of services:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Web and mobile app development
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Software architecture
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT consulting and audit
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Legacy system modernization
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Cloud computing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="2">
                            Q. Why is custom software development important?
                            </AccordionHeader>
                            <AccordionBody accordionId="2" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p align="justify">
                                Custom software development is vital for businesses because it:

                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Offers personalized solutions that meet specific needs.
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Enhances productivity and efficiency.

                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Provides flexibility for future growth and changes.

                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Ensures higher security tailored to business operations.

                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                Creates a unique identity by avoiding off-the-shelf, generic software.

                                                </span>
                                            </li>
                                            {/* <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    QA and testing
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Business analysis
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    IT staffing services
                                                </span>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <img src={shape1} alt="Techco Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <img src={shape2} alt="Techco Shape Angle" />
            </div>
        </section>
    )
};
export default FaqSection;
