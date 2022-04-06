import React from 'react'
import styled from 'styled-components';
import BannerCase from '../components/CaseStudy/BannerCase';
import GallerySection from '../components/CaseStudy/GallerySection';
import SecondSection from '../components/CaseStudy/SecondSection';
import ThirdSection from '../components/CaseStudy/ThirdSection';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Paragraph from '../styled/Paragraph';
import Video from '../styled/Video';

const Wrapper = styled.section`
    padding-top:100px;
    .youtube-vid{
        max-width:950px;
        width:80%;
        height:470px;
        
    }
`

function RiseOfShinga() {
  return (
    <Wrapper id="projects">
        {/* <BannerCase
        bigheader="uncommon.org"
        imgUrl="uncommontop.png"
        heading="About "
        span="Client"
      >
        <Paragraph>
          Uncommon.org is a non-profit organization based in Zimbabwe aimed at
          helping young adults in low-income communities launch their careers in
          the technology industry free of charge.
        </Paragraph>
        <Paragraph>
          The organization realized in the communities, young adults were ending
          up in the streets doing nothing because they did not have funding to
          feather their education, while there was also an overwhelming thirst
          for technology education and a heartbreaking lack of opportunities for
          youths and young adults in communities.
        </Paragraph>
        <h4>Film Production and Photography</h4>
      </BannerCase> */}
      <Video videoId="bBYVqZUXg0o" bgImagehover='riseofshinga.png' bgImage="riseofshinga.png" />
      <ThirdSection
        imageOne="uncommonone.png"
        imageTwo="uncommontwo.png"
        imageThree="uncommonthree.png"
      >
        <Paragraph>
          Uncommon.org was looking for a way to share their story with the world
          sharing their experiences, mission values, and different stories and
          they reached out to our company. The organization is filled with very
          creative, enthusiastic, and young leaders with very amazing stories
          which the world should know about. We are excited that we got an
          opportunity to sit in the front seat watching them grow and reach
          greater heights as well as tell their stories in a creative way.
        </Paragraph>
      </ThirdSection>
      <GallerySection
        galleryOne="uncommong1.png"
        galleryTwo="uncommong2.png"
        galleryThree="uncommong3.png"
        galleryFour="uncommong4.png"
        galleryFive="uncommong5.png"
      />
        <ContactUs />
      <Footer />
    </Wrapper>
  )
}

export default RiseOfShinga