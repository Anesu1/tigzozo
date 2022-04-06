import React from "react";
import styled from "styled-components";
import BigHeader from "../../styled/BigHeader";
import Heading from "../../styled/Heading";

const Wrapper = styled.section`
  padding: 5%;
  padding-top: 95px;
  @media(min-width:992px){
      display:flex;
      justify-content:space-between;
      .inner{
          margin:auto;
          .heading{
              h3{
                  font-size:60px;
                  width:max-content;
                  z-index:-1;
                  position:relative;
              }
              h2{
                  top:0;
                  font-size:30px;
              }
          }
      }
  }
  @media(min-width:1200px){
      .inner{
          width:50%;
          .heading{
              h3{
                  font-size:70px;
              }
          }
      }
  }
    h3{
        font-size:40px;
    }
    .heading{
        margin-bottom:20px;
    }
    p{
        margin-bottom:20px;
    }
    h4{
        font-family: ${props => props.theme.fam.semibold};
    font-size: 20px;
    margin-top:30px;
    color:#000000;
    opacity:0.5;
    }
  img {
    width: 100%;
    @media(min-width:768px){
        margin:auto;
        max-width:500px;
        display:block;
    }
  }
`;

function BannerCase({ children, imgUrl, bigheader, heading, span }) {
  return (
    <Wrapper>
      <div className="inner">
        <div className="heading">
          <BigHeader>{bigheader}</BigHeader>
          <Heading>
            {heading}
            <span>{span}</span>{" "}
          </Heading>
        </div>
        {children}
      </div>
      <img src={`./images/${imgUrl}`} alt="" />
    </Wrapper>
  );
}

export default BannerCase;
