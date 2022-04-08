/* eslint-disable no-unused-vars */
import React from "react";
import BannerCase from "../components/CaseStudy/BannerCase";
import GallerySection from "../components/CaseStudy/GallerySection";
import SecondSection from "../components/CaseStudy/SecondSection";
import ThirdSection from "../components/CaseStudy/ThirdSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Paragraph from "../styled/Paragraph";
import Video from "../styled/Video";
import styled from "styled-components";

const Wrapper = styled.section`
  .youtube-vid {
    max-width: 950px;
    width: 80%;
    height: 470px;
  }
`;

function Uncommon() {
  return (
    <Wrapper>
      <BannerCase
        bigheader="uncommon.org"
        imgUrl="uncommontop.png"
        heading="About "
        span="Client"
      >
        <Paragraph>
          Uncommon.org is a non-profit organisation whose mission is to empower
          young adults with the technology education and economic opportunities
          they need to positively change the trajectory of their lives.
        </Paragraph>
      </BannerCase>
      <Video videoId="bBYVqZUXg0o" bgImagehover="byo.png" bgImage="byo.png" />
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
  );
}

export default Uncommon;
