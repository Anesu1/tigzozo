/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import BigHeader from "../../styled/BigHeader";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '../../styled/Button'
gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.section`
  padding: 5%;
  .heading {
    text-align: center;
    h2 {
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
    }
  }
  h3{
    margin-bottom:20px;
  }
  p {
    margin: 20px 0 30px;
    text-align: center;
  }
  .partners {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;
    @media (min-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }
    img {
      width: 45%;
      @media (min-width: 768px) {
        width: 26%;
        max-width: 150px;
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
  .second {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  
.mass{
  margin-bottom:30px;
  @media(min-width:768px){
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:800px;
    margin:0 auto;
  }
  img{
    width:100%;
    max-width:300px;
    margin-left:auto;
    display:block;
  }
  p{
    text-align:left;
    margin-bottom:0;
  }
  h5{
    margin:0;
    @media(min-width:768px){
      margin-left:50%;
      width:max-content;
      position:relative;
      z-index:11;
      font-size:22px;
    }
  }
  h3{
    font-size:22px;
    @media(min-width:768px){
      margin-left:50%;
      width:max-content;
      position:relative;
      z-index:11;
      font-size:35px;
    }
  }
  .text{
    margin-bottom:30px;
    position:relative;
    z-index:11;
    @media(min-width:768px){
      width:52%;
    }
    h5{
      color:${props => props.theme.color.orange};
      text-transform:uppercase;
      font-family:${props => props.theme.fam.semibold};
    }
    h3{

    }
  }
  button{
    padding:0;
    @media(min-width:768px){
      margin-left:auto;
    }
  }
}
.two{
  display:flex;
  flex-direction:column-reverse;
 @media(min-width:768px){
   flex-direction:row;
   justify-content:space-between;
   button{
     margin-left:unset;
   }
   .text{
     width:45%;
     padding-left:30px;
     h3{
       margin-left:-42%;

     }
     h5{
       margin-left:19%;
     }
   }
 }
 @media(min-width:992px){
   .text{
    h3{
       margin-left:-47%;

     }
   }
 }
}
.three{
  @media(min-width:768px){
    h3{
      margin-left:67%;

    }
    h5{
      margin-left:67%;
    }
  }
}
.one,.three{
  @media(min-width:992px){
    img{
      margin-right: auto;
    margin-left: unset;
    }
    button{
      margin-right:30px;
    }
  }
}
  
`;

function OurPortfolio() {
  const mass = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const el = mass.current;
    const elone = two.current;
    const eltwo = three.current;
    const textt = text.current;
  //   gsap.fromTo(
  //     el,
  //     { 
  //       y:(i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  // ease: "none"
  //     },
  //     {
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: el,
  //         scrub: 1,
  //         markers: true,
          
  //       },

  //     }
  //   );
  // let tl = gsap.timeline()
  // tl.from('.hty', {y:300})
  //   .from('.htyy', {y:300})
  //   .from('.htyyy', {y:300})
    
  //   ScrollTrigger.create({
  //     animationi:tl,
  //     trigger:'.mass',
  //     start:"top top",
  //     end:"+=1000",
  //     scrub:true,
  //     pin:true,
  //     anticipatePin:1
  //   })


    // tl.from(
    //   '.hty',
    //   {
    //     scrollTrigger: {
    //       scrub: true,
    //       trigger:'.hty',
    //       markers:true,
    //       start:'20px 80%',
    //       end:'bottom 20%'
    //     }, 
    //     y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
    //     ease: "none"
    //   }
    // )
    // .from(
    //   '.htyy',
    //   {
    //     scrollTrigger: {
    //       scrub: true,
    //       trigger:'.hty',
    //       markers:true,
    //       start:'20px 80%',
    //       end:'bottom 20%'
    //     }, 
    //     y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
    //     ease: "none"
    //   }
    // )
    // .from(
    //   '.htyyy',
    //   {
    //     scrollTrigger: {
    //       scrub: true,
    //       trigger:'.hty',
    //       markers:true,
    //       start:'20px 80%',
    //       end:'bottom 20%'
    //     }, 
    //     y: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed,
    //     ease: "none"
    //   }
    // ),
    // gsap.fromTo(
    //   eltwo,
    //   { rotation: 0, y:200 },
    //   {
    //     rotation: 0,
    //     duration: 3,
    //     y:-100,
    //     scrollTrigger: {
    //       trigger: eltwo,
    //       scrub: 1,
    //       markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   textt,
    //   { rotation: 0  },
    //   {
    //     rotation: 0,
    //     duration: 3,
    //     y:-100,
    //     scrollTrigger: {
    //       trigger: textt,
    //       scrub: 1,
    //       pin:true
    //     },
    //   }
    // );
  }, []);

  return (
    <Wrapper id="projects">
      <div className="heading">
        <BigHeader>Portfolio</BigHeader>
        <Heading>
          Our <span>Work.</span>{" "}
        </Heading>
      </div>
<div className="container">
   <div className="mass one">
   <div className="text">
          <h3>The Rise Of Shinga</h3>
          <Paragraph>
          The documentary on the deployment of dogs for Wildlife Shinga to the Imire: Rhino and Wildlife Conservancy in Zimbabwe…
          </Paragraph>
          <Button 
          iconcolor="#F24D2D"
          textcolor="#000000"
          borderColor="#000000"
          link="/riseofshinga"
          text="Learn More"
          />
        </div>
        <img src="./images/shinga.png" data-speed="0.35" className="htyyy" alt="" ref={three} />
      </div>
      <div className="mass two"> 
      <img src="./images/two.png" alt="" className="htyy" ref={two}  data-speed="0.35" />
        <div className="text" ref={text}>
          <h3>Uncommon Stories</h3>
          <Paragraph>
          Uncommon.org is a non-profit technology company whose mission is to empower low-income community members with …
          </Paragraph>
          <Button 
          iconcolor="#F24D2D"
          textcolor="#000000"
          borderColor="#000000"
          link="/uncommon"
          text="Learn More"
          />
        </div>
       
      </div>
      <div className="mass three">
      <div className="text" ref={text}>
          <h3>Mass Drug Administration</h3>
          <Paragraph>
          Documenting a Mass Drug Administration in 2020 on behalf of the World Health Organization. The documentary has also won 2 International Awards….
          </Paragraph>
          <Button 
          iconcolor="#F24D2D"
          textcolor="#000000"
          borderColor="#000000"
          link="/who"
          text="Learn More"
          />
        </div>
        <img src="./images/one.png" className="hty" alt="" ref={mass} data-speed="0.35" />
     
      </div>
</div>
     

    </Wrapper>
  );
}

export default OurPortfolio;
