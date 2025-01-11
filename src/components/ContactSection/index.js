import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '../../images/icons/icon_map_mark_2.svg'
import icon2 from '../../images/icons/icon_calling_2.svg'
import icon3 from '../../images/icons/icon_mail_3.svg'
import icon4 from '../../images/icons/icon_calendar_2.svg'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Location</h3>
                                <p className="mb-0">
                                Office No 003, Near Lagad Transport, Nanaded City Pune 411041
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contact</h3>
                                <p className="mb-0">
                                <a href="tel:+919284073211" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    +(91) 9284073211
                                </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <p className="mb-0">
                                <a href="mailto:info@shreerevatech.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    info@shreerevatech.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Visit Between</h3>
                                <p className="mb-0">Mon - Sat: 8.00-5.00</p>
                                <p className="mb-0">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Near+Lagad+Transport,+Nanded+City,+Pune+411041" 
                                target="" 
                                rel="noopener noreferrer">
                        <div className="gmap_canvas ps-lg-5">
                            <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3686012301794!2d73.80772147540806!3d18.45684977475966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0ee94d1c2d7%3A0xf1ae6568a1d75fef!2sNear%20Lagad%20Transport%2C%20Nanded%20City%2C%20Pune%2C%20Maharashtra%20411041!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;