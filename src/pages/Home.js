/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react'
import styled from 'styled-components'
import BannerHome from '../components/BannerHome';
import AboutUs from '../components/AboutUs';
import OurFeaturedClients from '../components/Home/OurFeaturedClients';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Services from '../components/Home/Services';
import OurPortfolio from '../components/Home/OurPortfolio';
import Example from '../components/Home/Example';
import Insta from '../components/Insta';

const Wrapper = styled.section`
  
`


function Home() {
  
  return (
      <Wrapper>
      <BannerHome bgImage="./images/home.jpg">
        We <span>Shoot.</span><br />You <span>Tell.</span> 
        </BannerHome>
        <AboutUs />
        <Services />
       
        <OurPortfolio />
        <OurFeaturedClients />

        <ContactUs />
        {/* <Insta /> */}
          <Footer />
      </Wrapper>
  )
}

export default Home