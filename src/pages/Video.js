import React from 'react'
import Banner from '../components/Banner'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'

function Video() {
  return (
    <div>
         <Banner bgImage="./images/video.png">Video<span>graphy.</span></Banner>
         <VideoSection />
         <ContactUs />
          <Footer />
        </div>
  )
}

export default Video