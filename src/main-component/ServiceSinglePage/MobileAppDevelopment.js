import React, { Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import Services from '../../api/service';
import srImg from '../../images/services/service_1.png';
import srImg2 from '../../images/services/serive_2.png';
import srImg3 from '../../images/services/service_3.png';
import srImg4 from '../../images/services/service_4.png';
import icon from '../../images/icons/icon_check_3.svg';

const MobileAppDevelopment = () => {
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
                <PageTitle 
                    pageTitle={serviceData.title} 
                    pagesub={'Details 😍'} 
                    pageTop={'Mobile App Development'} 
                />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <img src={srImg} alt={serviceData.title} />
                            <button 
                                className="video_btn ripple_effect" 
                                onClick={() => setOpen(true)}
                            >
                                <span className="btn_icon">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </button>
                        </div>
                        <h2 className="details_item_title">{serviceData.title}</h2>
                        {/* <p align="justify">{serviceData.description}</p> */}
                        <p>
                            {serviceData.mad}
                        </p>
                        
                        <ProcessTechnology />
                        <h3 className="details_item_info_title">Services Outcome</h3>
                        <p className="mb-4">
                            Here are six key outcomes associated with our custom mobile app development services, helping businesses drive innovation and success:
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Scalability and Flexibility
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
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
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            User Experience
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
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
                                    <img src={srImg2} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg3} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <img src={srImg4} alt="Service Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
            <ModalVideo 
                channel="youtube" 
                autoplay 
                isOpen={isOpen} 
                videoId="7e90gBu4pas" 
                onClose={() => setOpen(false)} 
            />
        </Fragment>
    );
};

export default MobileAppDevelopment;
