import React from "react";
import styled from "styled-components";
import BannerCase from "../components/CaseStudy/BannerCase";
import GallerySection from "../components/CaseStudy/GallerySection";
import SecondSection from "../components/CaseStudy/SecondSection";
import ThirdSection from "../components/CaseStudy/ThirdSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Paragraph from "../styled/Paragraph";
import Video from "../styled/Video";

const Wrapper = styled.section`
  padding-top: 100px;
  .youtube-vid {
    max-width: 950px;
    width: 80%;
    height: 470px;
  }
`;

function RiseOfShinga() {
  return (
    <Wrapper id="projects">
      <BannerCase
        bigheader="rise of shinga"
        imgUrl="shingalogo.png"
        heading="About "
        span="Client"
      >
        <Paragraph>
          IMIRE Game Park is one of the best safaris in Zimbabwe, located about
          38km along Bridge Road (Wedza Road), from the beautiful City Centre of
          Marondera. It is an extraordinary game park for interactions between
          animals and people.
        </Paragraph>
        <Paragraph>
          Imire has over 4,000 hectares (10,000 acres) of conservancy and farm
          land in a very diverse landscape where you will find rhino, elephant,
          lion, buffalo, leopard, giraffe, zebra, hyena, and more than ten
          different types of antelope and more than 150 different species of
          birdlife here.
        </Paragraph>
      </BannerCase>
      <Video
        videoId="VaumEythX4U"
        bgImagehover="shingavid.webp"
        bgImage="shingaimage.webp"
      />
      <ThirdSection
        imageOne="shingaone.png"
        imageTwo="shingatwo.png"
        imageThree="shingathree.png"
      >
        <Paragraph>
          Imire Conservancy received a donation of a one-year-old, fully trained
          Belgian Malinois dog called Shinga from Dogs For Wildlife. Tigzozo
          Media was humbled to document the arrival of ‘Shinga’ from the United
          Kingdom to his settling and adjusting to the team and environment at
          the game park over a one-week period. During the filming of this
          documentary, we gained a new appreciation which we tried to also
          capture during filming of the devasting effects the scourge of
          poaching is having on our wildlife and the amazing collective efforts
          being done to stop it.
        </Paragraph>
      </ThirdSection>
      <GallerySection
        galleryOne="shingag1.png"
        galleryTwo="shingag2.png"
        galleryThree="shingag3.png"
        galleryFour="shingag4.png"
        galleryFive="shingag5.png"
      />
      <ContactUs />
      <Footer />
    </Wrapper>
  );
}

export default RiseOfShinga;
