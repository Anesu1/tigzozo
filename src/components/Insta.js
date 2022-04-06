/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  padding: 5%;
  @media(min-width:768px){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
  }
  .outter{
    .icons{
      margin-top:20px;
      a{
        text-decoration:none;
        color:${props => props.theme.color.orange};
        svg{
          height:30px;
          width:30px;
        }
      }
    }
  }
`;

const BgWrapper = styled.div`
  background:url('${props => props.bgImage}');
  background-size:cover;
  height:250px;
  width:100%;
  position:relative;
  margin-bottom:20px;
  @media(min-width:768px){
    width:30%;
    height:200px;
  }
  @media(min-width:1200px){
    width:24%;
  }
  .inner{
    position:absolute;
    bottom:5%;
    color:#ffffff;
    left:5%;
    display:flex;
    align-items:center;
    span{
      margin-left:10px;
      font-size:18px;
      fontfamily:${props => props.theme.fam.semibold};
    }
    svg{
      height:30px;
      width:30px;
    }
  }
`;

function Insta() {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYTnNRRktZAdEN3WlljS0ZA6UnhfSFBYOEoyUk1mZADk4bVBXVkVNSGhhU2dtQkhnMEVwbnlnNFpDVTkwUEFZATEtaQTdvN1ZATa1ZACdEZAreG1wZAkFvYmthUHJtY3cxZA1BaMWdBZAzZAvLWdpMEZArbTNtRAZDZD`
      )
      .then((res) => {
        const media = res.data.data;
        console.log(media);

        setMedia(media);
      });
  }, []);
  return (
    <Wrapper>
      {media.slice(0, 3).map((item, i) => {
        return (
          <BgWrapper key={i} className="insta-image" bgImage={item.media_url}>
            <div className="inner">
              <FaInstagram /> <span>Instagram post</span>
            </div>
          </BgWrapper>
        );
      })}
      <div className="outter">
      <Heading>
            Social <span>feed.</span>
          </Heading>
          <Paragraph>Come see what we’re up to! </Paragraph>
          <div className="icons">
            <a href="#">
            <FaInstagram /> 
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
      </div>
    </Wrapper>
  );
}

export default Insta;
