/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components'
import {BsPlayFill} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {FaFacebookF, FaLinkedin} from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";


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
      display:flex;
      align-items:center;
      justify-content:center;
      
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
    .inner{
      position:absolute;
      bottom:5%;
      left:5%;
      display:flex;
      align-items:center;
      @media(min-width:768px){
        bottom:30%;
    left: 60%;
      }
      @media(min-width:1200px){
        
    left: 55%;
      }
      span{
        font-family: ${props => props.theme.fam.regular};
    font-size: 20px;
    color:#ffffff;
    width:max-content;
    margin-left:10px;
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

function BannerHome({children, bgImage}) {
  return (
    <BannerWrapper bgImage={bgImage}>
        <h1>{children}</h1>
        <Link
           to="projects"
           spy={true}
           smooth={true}
           activeClass="active"
           duration={500} className="inner">
          <div className="video">
          <BsPlayFill />
          </div>
          <span>Watch Project</span>
          
        </Link>
        
          <div className="links">
            <a href="https://instagram.com/tigzozo_media?utm_medium=copy_link"><BsInstagram /></a>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Ftigzozomedia"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/tigzozo-media-b0a411234"><FaLinkedin /></a>
            
            </div>
    </BannerWrapper>
  )
}

export default BannerHome