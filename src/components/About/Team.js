/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade, Navigation, FreeMode, Thumbs } from 'swiper'
import styled from "styled-components";
import {BsChevronRight} from 'react-icons/bs'


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// import required modules
 
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const Wrapper = styled.section`
  padding: 5% 5% 50px;
  background: #000000;
  color: #ffffff;
  position: relative;
  @media(min-width:768px){
        padding:0;
    }
    h2{
        @media(min-width:768px){
        position:absolute;
        left:5%;
        top:5%;
    }
    @media(min-width:768px){
        top:15%;
    }
    }
  .top-swiper {
    
    img {
      width: 80%;
      margin-left: auto;
      display: block;
      @media (min-width: 768px) {
        width: 60%;
      }
      @media (min-width: 1200px) {
        width: 50%;
      }
    }
  }
  img {
    width: 100%;
  }
  .text {
    @media(min-width:768px){
        padding:5%;
        position:absolute;
        top:20%;
        p{
            font-size:15px;
            width:330px;
        }
    }
    h3 {
      font-size: 40px;
      margin-bottom: 20px;
      @media(min-width:768px){
        font-size:50px;
    }
      @media(min-width:1200px){
        font-size:70px;
    }
    }
    h6 {
      font-size: 25px;
      margin-bottom: 20px;
    }
   
  } h1{
        color:rgba(34, 34, 34, 0.31);
        position:absolute;
        z-index:-1;
        top:50%;
        font-size:74px;
        transform:translate(-50%,-50%);
        left:50%;
        @media(min-width:768px){
            font-size:120px;
        }
        @media(min-width:992px){
            font-size:180px;
        }
        @media(min-width:1200px){
            font-size:250px;
        }
    }
  .swiper-button-prev {
    text-transform: capitalize !important;
    position: absolute;
    width: 80px;
    left: 5%;
    color: transparent;
    @media(min-width:768px){
        top:70%;
    }
    &:before {
      display:none;
    }
  }
  .swiper-button-next {
    text-transform: capitalize !important;
    width: 80px;
    color: transparent;
    position: absolute;
    left: 80px;
    @media(min-width:768px){
        top:70%;
        left:15%;
    }
    &:before {
      display:none;
    }
  }
  .bottom-swipe {
    margin: 0 auto;
    display: block;
    width: max-content;
    margin-top: 30px;
    @media(min-width:768px){
        position:absolute;
        bottom:10%;
        left:5%;
    }
    .swiper-slide {
      padding: 8px;
      border-radius: 50%;
      height: 42px;
      width: 42px !important;
      cursor: pointer;
      transition: all 0.7s ease;
      @media(min-width:1200px){
        height:60px;
        width:60px !important;
    }
      .outer {
        opacity: 0.5;
        border-radius: 100%;
        position: relative;
        transition: all 0.7s ease;
      }
    }
    .swiper-slide-thumb-active {
      /* border:1px dotted ${(props) => props.theme.color.orange}; */
      .circle {
        display: block;
        width: 95%;
        height: 95%;
        border: 2px dotted ${(props) => props.theme.color.orange};
        border-radius: 50%;
        position: absolute;
        transition: all 0.7s ease;
        left: 0;
        top: 0;
        background-clip: content-box;
        animation: spin 10s linear infinite;
      }
      .outer {
        opacity: 1;
      }
    }
  }
.top-swiper{
   .swiper-slide{
    opacity:0 !important; 
  }
  .swiper-slide-active{
    opacity:1 !important;
  }
}
 
  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const ourTeam = [
  {
    title: "Caroline Magenga",
    name: "Caroline",
    role: "Chief Operations Officer",
    description:
      '"Success belongs to the risk takers not the comfort seekers".',
    imageUrl: "./images/team1.png",
    imageBig: "./images/carol-removebg-preview.png",
  },
  {
    title: "Kudzai Tinago",
    name: "Kudzai",
    role: "Creative Director",
    description:
      '"Infinite creativity".',
    imageUrl: "./images/team2.png",
    imageBig: "./images/kudzai-removebg-preview.png",
  },
  {
    title: "Kudakwashe Runesu",
    name: "Kuda",
    role: "Cinematographer",
    description:
      '"Simplicity is everything".',
    imageUrl: "./images/team3.png",
    imageBig: "./images/kuda-removebg-preview.png",
  },
  {
    title: "Terrence D. Phiri",
    name: "Terrence",
    role: "Film Director",
    description:
      '"Creativity is nothing but a mind set free".',
    imageUrl: "./images/team5.png",
    imageBig: "./images/terry-removebg-preview.png",
  },
];

function Team() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Wrapper >
      <Heading>
        Meet the <span>team.</span>
      </Heading>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode,EffectFade, Navigation, Thumbs]}
        className="mySwiper top-swiper"
      >
        {ourTeam.map((item, i) => {
          return (
            <SwiperSlide> <h1>{item.name}</h1>
              <div className="text" key={i}>
                <h3>{item.title}</h3>
                <h6>{item.role}</h6>
               
                <Paragraph>{item.description}</Paragraph>
              </div>
              <img src={item.imageBig} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper bottom-swipe"
      >
        {ourTeam.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="circle"></div>
              <div className="outer">
                <img src={item.imageBig} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

export default Team;
