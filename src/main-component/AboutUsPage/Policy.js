import React from 'react';
import sIcon1 from '../../images/icons/icon_clock.svg'
import sIcon2 from '../../images/icons/icon_dart_board_2.svg'
import sIcon3 from '../../images/icons/icon_target.svg'

const Policy = [
    {
        title: 'Our History',
        subTitle: 'Established in 2018, ShreeRevatech has quickly emerged as a visionary and reliable software engineering partner for businesses worldwide. With a commitment to innovation and excellence, we deliver solutions that empower our clients to thrive in the digital age.',
        icon: sIcon1,
    },
    {
        title: 'Our Mission',
        subTitle: 'At ShreeRevatech, our mission is to empower businesses by providing cutting-edge technology solutions. We aim to support our clients in achieving their goals, fostering growth, and driving innovation in a rapidly evolving digital landscape.',
        icon: sIcon2,
    },
    {
        title: 'Our Vision',
        subTitle: 'Our vision is to be a global leader in software engineering, shaping the future of technology by consistently delivering exceptional solutions. We are committed to inspiring innovation and excellence, enabling businesses to realize their full potential.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;