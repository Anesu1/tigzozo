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
          As Tigzozo media we pride ourselves on our purpose filled, compelling
          story telling that captures the ‘humanity’ of the moment. Not only are
          we passionate in humanitarian work but also in projects around
          sustainability and conservation of wildlife and our natural world. 
        </Paragraph>
        <Paragraph>
        In light of this we were thrilled to do a documentary that amplified the
          efforts of Imire Rhino & Wildlife Conservancy. They have been
          contributing to the preservation of wildlife through ground-breaking
          breeding programmes, wildlife research, and advanced anti-poaching
          solutions including the use of trained K9 units and armoured rangers.
          To aid in this cause Imire Conservancy received a donation of a
          one-year-old, fully trained Belgian Malinois dog called Shinga from
          Dogs For Wildlife. Tigzozo Media were humbled to document from the
          arrival of ‘Shinga’ from the United Kingdom to his settling and
          adjusting to the team and environment at the game park over a one-week
          period. During the filming of this documentary, we gained a new
          appreciation which we tried to also capture during filming of the
          devasting effects the scourge of poaching is having on our wildlife
          and the amazing collective efforts being done to stop it.
        </Paragraph>
        <h4>Film Production and Photography</h4>
      </BannerCase>
      <Video
        videoId="bBYVqZUXg0o"
        bgImagehover="riseofshinga.png"
        bgImage="riseofshinga.png"
      />
      <ThirdSection
        imageOne="shingaone.png"
        imageTwo="shingatwo.png"
        imageThree="shingathree.png"
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
