import React from "react";
import BannerCase from "../components/CaseStudy/BannerCase";
import SecondSection from "../components/CaseStudy/SecondSection";
import ThirdSection from "../components/CaseStudy/ThirdSection";
import GallerySection from "../components/CaseStudy/GallerySection";
import Paragraph from "../styled/Paragraph";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

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
          
        </Paragraph>
        <Paragraph>
        Organisation embarks on a 10 day Mass Drug Administration program
          assisting over 300,000 individuals with treatment of these two
          diseases. The villagers are happy with this initiative and they look
          forward to more partnership to ensure better health, for everyone,
          everywhere.
        </Paragraph>
        <h4>Film Production and Photography</h4>
      </BannerCase>
      <SecondSection videoUrl="./images/light.mp4" background="bgwho.png" />
      <ThirdSection
        imageOne="whoone.png"
        imageTwo="whotwo.png"
        imageThree="whothree.png"
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos{" "}
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
