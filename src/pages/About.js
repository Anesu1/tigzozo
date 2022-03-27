import React from 'react'
import AboutUs from '../components/About/AboutUs'
import Team from '../components/About/Team'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'



function About() {
  return (
    <div>
      <Banner bgImage="./images/about.png">About <span>Us</span> </Banner>
      <AboutUs />
      <Team />
      <ContactUs />
          <Footer />
    </div>
  )
}

export default About