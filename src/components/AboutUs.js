import React from "react";
import styled from "styled-components";
import BigHeader from "../styled/BigHeader";
import Button from "../styled/Button";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding:15% 5% ;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:5%;
  }
  img {
    width: 100%;
    max-wwidth: 400px;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 45%;
      margin-right:0;
    }
  }
  .heading {
    margin-bottom: 20px;
  }
  .inner {
    margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  .react-tiger-transition--screen {
    overflow: hidden;
  }
`;

function AboutUs() {
  return (
    <Wrapper>
      <div className="inner">
          <div className="heading">
            <BigHeader>About Us</BigHeader>
            <Heading>
              Through the <span>lens.</span>{" "}
            </Heading>
          </div>

        <Paragraph>
          We’re a dedicated team of digital and media creators,
          <br /> marketers and events planners who share a common passion <br />{" "}
          with our clients. Together we create extraordinary brand <br />{" "}
          experiences ...
        </Paragraph>
        <Button
          iconcolor="#F24D2D"
          textcolor="#000000"
          borderColor="#000000"
          link="/about"
          text="Read More"
        />
      </div>
      <img src="./images/aboutus.png" alt="" />
    </Wrapper>
  );
}

export default AboutUs;
