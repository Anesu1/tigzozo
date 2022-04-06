import React from "react";
import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";

const Wrapper = styled.section`
  padding: 5%;
  .video-inner{
      position:relative;
      @media(min-width:992px){
          max-width:950px;
          margin:0 auto;
      }
      img{
        object-fit:contain;
      }
  }
  button{
      position:absolute;
      display:flex;
      align-items:center;
      background:transparent;
      border:none;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      span{
        margin-left:10px;
        color:#ffffff;
        font-family:${props => props.theme.fam.rbold};
        font-size:20px;
        width:max-content;
      }

      .video-button{
      height:50px;
      width:50px;
      min-width:50px;
      border-radius:50%;
      border:3px solid #ffffff;
      
      display:flex;
      align-items:center;
      justify-content:center;
      
     
      svg{
        height:30px;
        width:30px;
        
        color:#ffffff;
      }
    }
    }
  [poster] {
    width: 100%;
  }
  video, source{
      width:100%;
  }
`;

function SecondSection({ background, videoUrl }) {
  return (
    <Wrapper>
      <div className="video-inner ">
        <video className="video" poster={`./images/${background}`}>
          <source
            src={videoUrl}
            type="video/mp4"
            loop="loop"
            autoplay="true"
            controls
          />
          Your browser does not support the video tag.
        </video>
        <button className="btn-primary"     >
      <div className="video-button">
          <BsPlayFill />
          </div>
        <span>Watch Project</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default SecondSection;
