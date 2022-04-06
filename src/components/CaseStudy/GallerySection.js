/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React,{useState} from 'react';
import styled from 'styled-components';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Wrapper = styled.section`
padding:0 5% 5%;
    .popup-btn{
margin-bottom:10px;
    }
    img{
        width:100%;
        
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
    const [galleryIndex,setGalleryIndex] = useState(0);
    const [galleryOpen,setGalleryOpen] = useState(false);

    const galleryList = [
        `./images/${galleryOne}`,
        `./images/${galleryTwo}`,
        `./images/${galleryThree}`,
        `./images/${galleryFour}`,
        `./images/${galleryFive}`
      ]
  return (
    <Wrapper>
        <div className="column">
        <div
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setGalleryOpen(true);
                      setGalleryIndex(0)
                    }}
                  >
            <img src={`./images/${galleryOne}`} alt="" /></div>
            <div
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setGalleryOpen(true);
                      setGalleryIndex(1)
                    }}
                  ><img src={`./images/${galleryTwo}`} alt="" /></div>
        </div>
        <div
                    className="popup-btn one-img"
                    onClick={(e) => {
                      e.preventDefault();
                      setGalleryOpen(true);
                      setGalleryIndex(2)
                    }}
                  ><img  src={`./images/${galleryThree}`} alt="" /></div>
        <div className="column one">
        <div
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setGalleryOpen(true);
                      setGalleryIndex(3)
                    }}
                  ><img src={`./images/${galleryFour}`} alt="" /></div>
            <div
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setGalleryOpen(true);
                      setGalleryIndex(4)
                    }}
                  ><img src={`./images/${galleryFive}`} alt="" /></div>
        </div>
        {galleryOpen && (
              <Lightbox
                mainSrc={galleryList[galleryIndex]}
                nextSrc={galleryList[(galleryIndex + 1) % galleryList.length]}
                prevSrc={
                    galleryList[(galleryIndex + galleryList.length - 1) % galleryList.length]
                }
                onCloseRequest={() => setGalleryOpen(false)}
                onMovePrevRequest={() =>
                  setGalleryIndex(
                    (galleryIndex + galleryList.length - 1) % galleryList.length
                  )
                }
                onMoveNextRequest={() =>
                  setGalleryIndex((galleryIndex + 1) % galleryList.length)
                }
              />
            )}
    </Wrapper>
  )
}

export default GallerySection