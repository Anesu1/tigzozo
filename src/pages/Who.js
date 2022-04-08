import React from "react";
import BannerCase from "../components/CaseStudy/BannerCase";
import ThirdSection from "../components/CaseStudy/ThirdSection";
import GallerySection from "../components/CaseStudy/GallerySection";
import Paragraph from "../styled/Paragraph";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Video from '../styled/Video'

function Who() {
  return (
    <>
      <BannerCase
        bigheader="World Health Organization"
        imgUrl="whotop.png"
        heading="About "
        span="Client"
      >
        <Paragraph>
          Bilharzia and Intestinal worms have been prominent in Mt.Darwin and
          Shamva districts of Zimbabwe. The government of Zimbabwe through the
          Ministry of Health and Child Care in partnership with the World Health
          Organisation embarks on a 10 day Mass Drug Administration program
          assisting over 300,000 individuals with treatment of these two
          diseases.
        </Paragraph>
        <Paragraph>
          The villagers are happy with this initiative and they look forward to
          more partnership to ensure better health, for everyone, everywhere.
        </Paragraph>
      </BannerCase>
      <Video videoId="Uh7S2ORJr2U&list=PLlJL6K4ARnBT51yoTWoZPEIUC4NuUZCsq" bgImagehover="byo.png" bgImage="byo.png" />
      <ThirdSection
      
        imageOne="whoone.png"
        imageTwo="whotwo.png"
        imageThree="whothree.png"
      >
        <Paragraph>
          The Tigzozo team was privileged to document the Mass Drug
          Administration Program in 2020 on behalf of the World Health
          Organization. Our role was to document the whole program by taking
          images, videos, and storytelling. The documentary has since won 2
          International Awards.
        </Paragraph>
      </ThirdSection>
      <GallerySection
        galleryOne="whog1.png"
        galleryTwo="whog2.png"
        galleryThree="whog3.png"
        galleryFour="whog4.png"
        galleryFive="whog5.png"
      />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Who;
