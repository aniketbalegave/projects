import React, { Fragment } from 'react';
// import Header from '../../components/header/Header';
import Header2 from '../../components/Header2/Header2';
import Project from '../../api/project';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import psImg from '../../images/portfolio/portfolio_item_image4.png'
import icon from '../../images/icons/icon_check_3.svg'


const PortfolioSinglePage = (props) => {
    const { slug } = useParams()
    const PortfolioDetails = Project.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header2 />
            <main className="page_content about-page">
                <PageTitle pageTitle={PortfolioDetails.title} pagesub={'Details 😃'} pageTop={'Portfolio'} />
                <section className="portfolio_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image">
                            <img src={psImg} alt="Portfolio Item" />
                        </div>
                        <h2 className="details_item_title"> Tailored Strategies for Your Financial Growth and Security</h2>
                        <p align="justify">
                        At Aaya Financial Advisory, we simplify the world of investing, offering customized strategies to help you achieve your financial goals. Whether you’re new to investing or looking to enhance your portfolio, our expert guidance ensures a seamless journey toward wealth creation and financial independence.
                        </p>
                        <h4 className="details_item_title">Who We Are                        </h4>
                        <p className="mb-0" align="justify">
                        With over 10 years of experience, Rajesh Ji specializes in guiding individuals through the intricacies of equity cash and compounding strategies. We understand that starting your investment journey can be overwhelming, but with our expertise, we make it simple and effective.
                        </p>
                        <hr />
                        <ul className="portfolio_details_info_list icon_list unordered_list justify-content-lg-between mb-5">
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Equity Cash : </strong>
                                    Invest directly in company stocks to build a strong portfolio.

                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Compounding : </strong>
                                    Reinvest profits to allow your money to grow exponentially over time.
                                </span>
                            </li>

                            <p className="mb-0" align="justify">
                            Our proven methods consistently deliver results, empowering clients to create long-term wealth and secure their financial future.
                        </p>

                            {/* <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Location:</strong>
                                   Pune
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_text">
                                    <strong className="text-dark text-uppercase">Completed Date:</strong>
                                    20-12-2024
                                </span>
                            </li> */}
                        </ul>

                        <h3 className="details_item_info_title pt-4">Why Choose Us?                        </h3>
                        {/* <p>
                            In this phase of the Cloud Migration and Integration project, our focus is on executing robust data migration strategies to ensure the seamless transfer of data from on-premises servers to cloud storage solutions. Leveraging advanced techniques and tools,
                        </p> */}
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                        A decade of hands-on experience in financial markets.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                        Tailored investment strategies to suit individual goals.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text" align ="justify">
                                        Transparent and reliable guidance for beginners and seasoned investors alike.
                                        </span>
                                    </li>
                                    {/* <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Infrastructure Preparation
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Application Migration
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Training and Documentation
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Infrastructure Preparation
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <img src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Post-migration Support
                                        </span>
                                    </li> */}
                                </ul>
                                
                            </div>
                        </div>

                        <h3 className="details_item_info_title pt-4">Take the First Step Today!                        </h3>
                        <p align ="justify">
                        The share market holds immense potential to grow your wealth—let us show you how. Connect with Rajendra Ji Financial Advisory today and embark on a journey toward financial success. Together, we’ll create a strategy that works for you.
                        </p>
                       <h4>Start investing today and secure a prosperous tomorrow!                       </h4>

                        <h3 className="details_item_info_title pt-5 mb-4">Our Similar Projects</h3>
                        <div className="row">
                            {Project.slice(10, 12).map((project, prj) => (
                                <div className="col-lg-6" key={prj}>
                                    <div className="portfolio_block portfolio_layout_2">
                                        <div className="portfolio_image">
                                            <Link onClick={ClickHandler} className="portfolio_image_wrap bg-light" to={`/portfolio_details/${project.slug}`}>
                                                <img src={project.pImg} alt="Mobile App Design" />
                                            </Link>
                                        </div>
                                        <div className="portfolio_content">
                                            <h3 className="portfolio_title">
                                                <Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <ul className="category_list unordered_list">
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-tags"></i> {project.thumb1}</Link></li>
                                                <li><Link onClick={ClickHandler} to={`/portfolio_details/${project.slug}`}><i className="fa-solid fa-building"></i> {project.thumb2}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PortfolioSinglePage;
