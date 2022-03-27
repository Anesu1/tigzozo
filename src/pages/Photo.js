import React from 'react'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


function Photo() {
  return (
    <div>
         <Banner bgImage="./images/photo.png">Photo<span>graphy</span>
         </Banner>
         <ContactUs />
          <Footer />
    </div>
  )
}

export default Photo