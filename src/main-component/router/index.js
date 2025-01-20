import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage2 from '../HomePage2/HomePage2';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PricingPage from '../PricingPage/PricingPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import WebDevelopment from '../ServiceSinglePage/WebDevelopmentPage';
import BlogPage from '../BlogPage/BlogPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import MobileAppDevelopment from '../ServiceSinglePage/MobileAppDevelopment';
import DigitalMarketing from '../ServiceSinglePage/DigitalMarketing';
import Seo from '../ServiceSinglePage/Seo';
import SoftwareMaintanence from '../ServiceSinglePage/SoftwareMaintanence';
import SoftwareDevelopment from '../ServiceSinglePage/SoftwareDevelopment';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="pricing" element={<PricingPage />} />
           <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<SoftwareDevelopment />} />
          <Route path="service-single/web-development" element={<WebDevelopment />} />

          <Route path="service-single/Mobile Application Developmenty" element = {<MobileAppDevelopment />} />
        
          <Route path="service-single/Digital Marketing" element = {<DigitalMarketing />} />
          <Route path="service-single/SEO Services" element = {<Seo />} />
          <Route path="service-single/Software Maintenance Services" element = {<SoftwareMaintanence />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />  
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
