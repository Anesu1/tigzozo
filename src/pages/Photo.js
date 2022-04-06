import React from 'react'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'


function Photo() {
  return (
    <div>
         <Banner bgImage="./images/photo.png">Photo<span>graphy.</span>
         </Banner>
         <GallerySection />
         <ContactUs />
          <Footer />
    </div>
  )
}

export default Photo