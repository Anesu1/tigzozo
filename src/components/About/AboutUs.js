import React from "react";
import styled from "styled-components";
import BigHeader from "../../styled/BigHeader";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  padding: 5%;
  text-align: center;
  .heading {
    text-align: center;
    h2 {
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
    }
  }
  p {
    margin-bottom: 50px;
    @media (min-width: 992px) {
      width: 70%;
      margin: 0 auto 50px;
    }
  }
  .bottom {
    margin-top: 30px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    img {
      max-width: 150px;
      width: 100%;
      display: block;
      margin: 0 auto 20px;
    }
  }
`;

function AboutUs() {
  return (
    <Wrapper>
      <div className="heading">
        <BigHeader>About Us</BigHeader>
        <Heading>
          Through the <span>lens.</span>{" "}
        </Heading>
      </div>
      <Paragraph>
        We are moved by the impact in humanitarian and development aid where we
        are transforming the everyday lives of communities and feel moved to
        capture them. Our drive from the onset has been to create compelling
        media production with a human-interest angle which captures emotions,
        and feelings.
      </Paragraph>
      <h4>Honors and Awards</h4>
      <div className="bottom">
        <img src="./images/aboutone.png" alt="" />
        <img src="./images/abouttwo.png" alt="" />
        <img src="./images/aboutthree.png" alt="" />
      </div>
    </Wrapper>
  );
}

export default AboutUs;
