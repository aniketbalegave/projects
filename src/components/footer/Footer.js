import React from 'react'
import { Link } from 'react-router-dom'
import Bg from '../../images/shapes/bg_pattern_3.svg'
import icon1 from '../../images/icons/icon_mail.svg'
import icon2 from '../../images/icons/icon_calling.svg'
import icon3 from '../../images/icons/icon_map_mark.svg'
import icon4 from '../../images/icons/icon_mail_2.svg'
import Services from '../../api/service'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer = (props) => {
    return (
        <footer className="site_footer footer_layout_1">
            <div className="content_box" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="diract_contact_links text-white">
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Mail SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Write to us</h3>
                                <p className="mb-0">
                                <a href="mailto:info@shreerevatech.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    info@shreerevatech.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title"> Call Us (IND)</h3>
                                <p className="mb-0">
                                <a href="tel:+919284073211" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    +(91) 9284073211
                                </a>
                                </p>
                            </div>
                        </div>
                        <div className="iconbox_block layout_icon_left">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="Map Mark Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Our Office</h3>
                                <p className="mb-0">
                                Office No 003,
                                <a href="https://www.google.com/maps/search/?api=1&query=Near+Lagad+Transport,+Nanded+City,+Pune+411041" 
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Near Lagad Transport, Nanded City, Pune 411041
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_main_content">
                        <div className="row justify-content-lg-between">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget pe-md-3">
                                    <h2 className="footer_info_title">Newsletter</h2>
                                    <p>
                                        Sign up to Shree RevaTech weekly newsletter to get the latest updates.
                                    </p>
                                    <form className="footer_newslatter" onSubmit={SubmitHandler}>
                                        <label htmlFor="footer_mail_input">
                                            <img src={icon4} alt="Mail SVG Icon" />
                                        </label>
                                        <input id="footer_mail_input" type="email" name="email" placeholder="Enter your email" />
                                        <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
                                    </form>
                                    <ul className="social_links_block unordered_list">
                                    <li>
                                        <a 
                                            href="https://www.facebook.com/shree.revatech/" 
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://www.instagram.com/shree_reva_tech/" 
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href="https://x.com/shreerevatech" 
                                            target="_blank" 
                                            rel="noopener noreferrer">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Services</h3>
                                    <ul className="icon_list unordered_list_block">
                                        {Services.slice(0, 6).map((service, srv) => (
                                            <li key={srv}>
                                                {service.title ?
                                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                        <span className="icon_list_text">
                                                            {service.title}
                                                        </span>
                                                    </Link>
                                                    : ''}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Information</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    About Shree RevaTech
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <span className="icon_list_text">
                                                    BlogsPage
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/contact">
                                                <span className="icon_list_text">
                                                    Help Center
                                                </span>
                                            </Link>
                                        </li>
                                       {/*  <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    Affiliate Program
                                                </span>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link onClick={ClickHandler} to="/portfolio">
                                                <span className="icon_list_text">
                                                    Career
                                                </span>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Pricing Plan
                                                </span>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer_widget">
                                    <h3 className="footer_info_title">Product</h3>
                                    <ul className="icon_list unordered_list_block">
                                        <li>
                                            <Link onClick={ClickHandler} to="/portfolio">
                                                <span className="icon_list_text">
                                                    Case Studies
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Our Pricing
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/service">
                                                <span className="icon_list_text">
                                                    Features
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/about">
                                                <span className="icon_list_text">
                                                    Overview
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/blog">
                                                <span className="icon_list_text">
                                                    New Releases
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} to="/pricing">
                                                <span className="icon_list_text">
                                                    Solutions
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer_bottom">
                <div className="container d-md-flex align-items-md-center justify-content-md-between">
                    <p className="copyright_text m-0">
                        Copyright © 2024 Techco, All rights reserved.
                    </p>
                    <p className="copyright_text m-0">
                        Developed by <Link onClick={ClickHandler} to="/">XpressBuddy</Link>
                    </p>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;