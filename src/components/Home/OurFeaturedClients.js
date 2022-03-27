import React from 'react';
import styled from 'styled-components';
import BigHeader from '../../styled/BigHeader';
import Heading from '../../styled/Heading';
import Paragraph from '../../styled/Paragraph';

const Wrapper = styled.section`
    padding:5%;
    background:#F2F2F2;
    .heading{
        text-align:center;
       h2{
           left:50%;
           transform:translateX(-50%);
           width:max-content;
       }
    }
    p{
        margin:20px 0 30px;
        text-align:center;
    }
    .partners{
        display:flex;
        flex-wrap:wrap;
        
        justify-content:space-around;
        @media(min-width:768px){
            width:80%;
            margin:0 auto;
        }
        img{width:45%;
        @media(min-width:768px){
            width:26%;
            max-width:150px;
        }
        &:nth-child(4),&:nth-child(5),&:nth-child(6){
            @media(min-width:768px){
                display:none;
            }
        }

        }
    }
    .second{
        display:none;
        @media(min-width:768px){
            display:flex;
        }
    }

`

function OurFeaturedClients() {
  return (
    <Wrapper>
        <div className="heading">
            <BigHeader>Our Featured Clients</BigHeader>
            <Heading>Amazing <span>partners.</span> </Heading>
            </div>
            <Paragraph>We believe direct collaboration with our clients is essential to bringing unique and engaging experiences to life. <br /> We help our clients solve business problems, increase visibility, and achieve unexpected results.</Paragraph>
            <div className="partners">
                <img src="./images/usaid.png" alt="" />
                <img src="./images/wfp.png" alt="" />
                <img src="./images/adra.png" alt="" />
                <img src="./images/path.png" alt="" />
                <img src="./images/ds.png" alt="" />
                <img src="./images/uncommon.png" alt="" />
                </div>
                <div className="partners second">
                <img src="./images/path.png" alt="" />
                <img src="./images/ds.png" alt="" />
                <img src="./images/uncommon.png" alt="" />
                    </div>
    </Wrapper>
  )
}

export default OurFeaturedClients