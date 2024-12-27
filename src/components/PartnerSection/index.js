import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/clients/client-1.png'
import pimg2 from '../../images/clients/client-2.png'
import pimg3 from '../../images/clients/client-3.png'
import pimg4 from '../../images/clients/client-4.png'
import pimg5 from '../../images/clients/client-5.png'
import pimg6 from '../../images/clients/client-6.png'
import pimg7 from '../../images/clients/client-7.png'
import pimg8 from '../../images/clients/client-8.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg8
    }
]

var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <div className="client_logo_carousel">
            <Slider {...settings}>
                {partners.map((partner, pitem) => (
                    <div className="client_logo_item" key={pitem}>
                        <img src={partner.pImg} alt="Techco - Client Logo" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PartnerSection;