/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components'
import {BsPlayFill} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa'

const BannerWrapper = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    background:linear-gradient(to bottom, #00000089, #00000089), url('${props => props.bgImage}');
    align-items:center;
    justify-content:center;
    background-size:cover;
    position:relative;
    background-position:-100px;
    @media(min-width:568px){
      background-position:unset;
      
    }
    @media(min-width:768px){
      height:660px;
      justify-content:flex-start;
      
    }
    @media(min-width:1200px){
      height:100vh;
      
      
    }
    h1{
        font-size:50px;
        color:#ffffff;
        @media(min-width:768px){
          padding-left:20%;
          font-size:80px;
        }
        @media(min-width:992px){
          font-size:100px;
        }
        span{
          color:${props => props.theme.color.orange};
        }
    }
    .video{
      height:50px;
      width:50px;
      border-radius:50%;
      border:5px solid #ffffff;
      position:absolute;
      left:5%;
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
        color:${props => props.theme.color.orange} !important;
        path{
          color:${props => props.theme.color.orange} !important;
        }
      }
    }
    .links{
      display:flex;
      flex-direction:column;
      position:absolute;
      bottom:5%;
      right:5%;
      @media(min-width:768px){
          right:9%;
        }
      a{
        text-decoration:none;
        color:${props => props.theme.color.orange};
        margin-bottom:10px;
        svg{
          height:30px;
          width:30px;
        }
      }
    }
    @keyframes pulse-white {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

`

function Banner({children, bgImage}) {
  return (
    <BannerWrapper bgImage={bgImage}>
        <h1>{children}</h1>
        <div className="video">
          <BsPlayFill />
          </div>
          <div className="links">
            <a href="#"><BsInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            
            </div>
    </BannerWrapper>
  )
}

export default Banner