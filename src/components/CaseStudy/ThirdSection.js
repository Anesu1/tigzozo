import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 5% 5% 0;
  @media(min-width:768px){
      padding-bottom:15%;
  }
  
  p {
    margin-bottom: 20px;
  }
  h3 {
    font-family: ${(props) => props.theme.fam.semibold};
    font-size: 30px;
    margin-bottom: 20px;
  }
  .imgs {
      margin:0 auto;
    width:100%;
    .right {
      display: flex;
      justify-content: space-between;
      @media(min-width:568px){
          flex-direction:column;
      }
      img {
        width: 47%;
      }
    }
      @media(min-width:568px){
          display:flex;
          justify-content:space-between;
          .one{
              width:56%;
          }
          .right{
              width:41%;
              img{
                  width:100%;
              }
          }

      }
      img{
          margin-bottom:20px;
      }
    
  }
  img {
    width: 100%;
    display:none;
    object-fit:contain;
  }
  @media(min-width:768px){
      display:flex;
      justify-content:space-between;
      .inner{
          width:45%;
          margin:auto 0;
      }
      
      .imgs{
         width:53%;
         margin:0;
         img{
          margin:0;
      }
         .one{
             width:56.5%;
         }
         .right{
             width:42%;
             img{
                 margin:0;
             }
         }
      }
      img{
          display:block;
      }
  }
  @media(min-width:992px){
      .inner{
          width:35%;

      }
      .imgs{
          width:58%;
      }
      
  }
`;

function ThirdSection({ children, imageOne, imageTwo, imageThree }) {
  return (
    <Wrapper>
      <div className="inner">
        <h3>What We did</h3>
        {children}
      </div>
      <div className="imgs">
        <img className="one" src={`./images/${imageOne}`} alt="" />
        <div className="right">
          <img src={`./images/${imageTwo}`} alt="" />
          <img src={`./images/${imageThree}`} alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ThirdSection;
