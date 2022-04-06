import React,{useState} from 'react';
import styled from 'styled-components';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Wrapper = styled.section`
padding:0 5% 5%;

    img{
        width:100%;
        margin-bottom:20px;
        object-fit:contain;
    }
    .one{
        display:none;
    }
    @media(min-width:568px){
    display:flex;
    justify-content:space-between;
  
    .column{
        width:49%;
        img{
        margin:0;
    }
    }
    .one-img{
        width:49.5%;
        margin:0;
        
    }
}
@media(min-width:768px){
    .column{
        width:38.5%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
    .one-img{
        width:38.5%;
    }
    .one{
        display:flex;
        flex-direction:column;
        width:20%;
        justify-content:space-between;
    }
}
`

function GallerySection({galleryOne, galleryTwo, galleryThree, galleryFour, galleryFive}) {
    const [saIndex,setSaIndex] = useState(0);
    const [saOpen,setSaOpen] = useState(false);

    const galleryList = [
        galleryOne,
        galleryTwo,
        galleryThree,
        galleryFour,
        galleryFive
      ]
  return (
    <Wrapper>
        <div className="column">
            <img src={`./images/${galleryOne}`} alt="" />
            <img src={`./images/${galleryTwo}`} alt="" />
        </div>
        <img className='one-img' src={`./images/${galleryThree}`} alt="" />
        <div className="column one">
            <img src={`./images/${galleryFour}`} alt="" />
            <img src={`./images/${galleryFive}`} alt="" />
        </div>
    </Wrapper>
  )
}

export default GallerySection