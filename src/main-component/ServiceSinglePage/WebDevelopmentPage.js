import React, { Fragment, useState } from 'react';
import Services from '../../api/service'
import { useParams, useNavigate } from 'react-router-dom'
import ModalVideo from 'react-modal-video'
// import Header from '../../components/header/Header';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import srImg from '../../images/services/service_1.png'
import srImg2 from '../../images/services/serive_2.png'
import srImg3 from '../../images/services/service_3.png'
import srImg4 from '../../images/services/service_4.png'
import icon from '../../images/icons/icon_check_3.svg'
import ServiceSection from '../../components/ServiceSection/ServiceSection';


const WebDevelopment = (props) => {

    const { slug } = useParams();
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    // Fetch specific service details based on the slug
    const serviceData = Services.find((service) => service.slug === slug);

    if (!serviceData) {
        navigate('/service'); // Redirect to service list if not found
        return null;
    }

    return (
        <Fragment>
            <Header2 />
            <main className="page_content service-single-page">
                <PageTitle pageTitle="Web Development" pagesub={'Details 😍'} pageTop={'Services'} />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt="Service Details"/>
                                <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                    <span className="btn_icon">
                                        <i className="fa-solid fa-play"></i>
                                    </span>
                                </button>
                        </div>
                        <h2 className="details_item_title">{serviceData.title}</h2>
                        <p align="justify">
                        In the fast-paced world of mobile technology, businesses must stay ahead by offering seamless and innovative mobile applications that enhance user engagement and drive success. At our IT solution agency, we specialize in creating customized mobile apps that are not only functional but also provide exceptional user experiences. Whether you're a startup or an established enterprise, our team works to understand your unique business needs and deliver mobile solutions that foster growth, efficiency, and customer satisfaction.

                        </p>
                         {/* <p align="justify">
                        We take a comprehensive approach to software development, considering factors such as user experience, system architecture, scalability, and future business needs. By utilizing industry best practices and the latest technologies, we deliver innovative solutions designed to evolve with your business.
                        </p>  */}
                        <ProcessTechnology />
                        <h3 className="details_item_info_title">Services Outcome</h3>
                        <p className="mb-4">
                        Here are six key outcomes associated with our custom software development services, helping businesses drive innovation and success:
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            Scalability and Flexibility
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            Performance Optimization
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            User Experience
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon"/>
                                        </span>
                                        <span className="icon_list_text">
                                            Training and Education
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg2} alt="Service Details"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt="Service Details"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt="Service Details"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default WebDevelopment;