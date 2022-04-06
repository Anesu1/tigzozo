/* eslint-disable no-unused-vars */
import React from 'react'
import AboutUs from '../components/About/AboutUs'
import Team from '../components/About/Team'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Insta from '../components/Insta'



function About() {
  return (
    <div>
      <Banner bgImage="./images/about.png">About <span>Us</span> </Banner>
      <AboutUs />
      <Team />
      {/* <Insta /> */}
      <ContactUs />
          <Footer />
    </div>
  )
}

export default About