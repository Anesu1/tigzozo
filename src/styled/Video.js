import React, {useState} from 'react';
import styled from 'styled-components';
import 'react-modal-video/css/modal-video.css';
import ModalVideo from 'react-modal-video'
import {BsPlayFill} from 'react-icons/bs';

const Wrapper = styled.div`
    height:220px;
    width:100%;
    max-width:600px;
    background:linear-gradient(to bottom, #00000073, #00000067), url('./youtube/${props => props.bgImage}');
    margin:0 auto 30px;
    background-size:cover;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
   
    @media(min-width:768px){
      height:250px;
      width:48%;
    }
    @media(min-width:992px){
      height:300px;
      
    }
    @media(min-width:1200px){
      margin:0 auto 30px;
    }
     
    button{
      position:relative;
      display:flex;
      align-items:center;
      background:transparent;
      border:none;
      &:hover{
        cursor:pointer;
        position:relative;
      display:flex;
      align-items:center;
      background:transparent;
      border:none;
      }
      span{
        margin-left:10px;
        color:#ffffff;
        font-family:${props => props.theme.fam.rbold};
        font-size:25px;
      }

      .video{
      height:50px;
      width:50px;
      border-radius:50%;
      border:3px solid #ffffff;
      
      display:flex;
      align-items:center;
      justify-content:center;
      bottom:5%;
      transform: scale(1);
      animation: pulse-white 2s infinite;
      @media(min-width:768px){
          left:9%;
        }
        @media(min-width:992px){
          left:55%;
          bottom:30%;
        }
      svg{
        height:30px;
        width:30px;
        color:#ffffff;
      }
    }
    }
    &:hover{
      background:url('./youtube/${props => props.bgImagehover}');
      background-size:cover;
    }
`

function Video({videoId, bgImage, bgImagehover}) {
     const [isOpen, setOpen] = useState(false)
  return (
    <Wrapper className='youtube-vid' bgImage={bgImage} bgImagehover={bgImagehover}>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

      <button className="btn-primary" onClick={()=> setOpen(true)}>
      <div className="video">
          <BsPlayFill />
          </div>
        <span>Watch Project</span>
        </button>
      </Wrapper>
  )
}

export default Video