import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    padding:5%;
    .gallery-inner{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        &:first-child{
            img{
                &:first-child,&:nth-child(2){
                    width:48.5%;
                    @media(min-width:768px){
                        width:calc(47.5% / 2);
                    }
                    
                }
                &:last-child{
                    @media(min-width:768px){
                        width:49%;
                    }
                    @media(min-width:992px){
                        width:50%;
                    }
                    
                }
            }
        }
        &:nth-child(2){
            
            img{
                &:first-child{
                    width:46.5%;
                    @media(min-width:768px){
                        width:calc(47.5% / 2);
                    }
                }
                &:nth-child(2){
                    order:2;
                    @media(min-width:768px){
                        order:1;
                        width:47.5%;
                    }
                }
                &:last-child{
                    order:1;
                    width:50.5%;
                    @media(min-width:768px){
                        width:calc(52.5% / 2);
                        order:2;
                    }
                }
            }
        }
        &:nth-child(3){
            img{
                &:last-child,&:nth-child(2){
                    width:48.5%;
                    @media(min-width:768px){
                        width:calc(60% / 2);
                        
                    }
                  
            }
              &:first-child{
                        @media(min-width:768px){
                        width:37.5%;
                        }
                    }
        }
    }
        &:nth-child(4){
            
            img{
                &:first-child{
                    width:56.5%;
                    @media(min-width:768px){
                        width:calc(45% / 2);
                    }
                }
                &:nth-child(2){
                    order:2;
                    @media(min-width:768px){
                        width:59%;
                        order:1;
                    }
                    
                }
                &:last-child{
                    order:1;
                    width:41%;
                    @media(min-width:768px){
                        width:calc(32% / 2);
                        order:2;
                    }
                }
            }
        }
        &:nth-child(5){
            
            img{
                
                &:nth-child(2){
                    width:57%;
                    order:1;
                    @media(min-width:768px){
                        width:calc(46.5% / 2);
                    }
                }
                &:last-child{
                    width:40%;
                    order:2;
                    @media(min-width:768px){
                        width:calc(32.5% / 2);
                    }
                }
                &:first-child{
                    order:3;
                    @media(min-width:768px){
                        width:58%;
                    }
                }
            }
        }
        img{
            width:100%;
            margin-bottom:9px;
            object-fit:contain;
            @media(min-width:768px){
                margin-bottom:12px;
            }
        }
    }
`

function GallerySection() {
  return (
    <Wrapper>
        <div className="gallery-inner">
            <img src="./images/gallery1.png" alt="" />
            <img src="./images/gallery2.png" alt="" />
            <img src="./images/gallery3.png" alt="" />
        </div>
        <div className="gallery-inner">
            <img src="./images/gallery4.png" alt="" />
            <img src="./images/gallery5.png" alt="" />
            <img src="./images/gallery6.png" alt="" />
        </div>
        <div className="gallery-inner">
            <img src="./images/gallery7.png" alt="" />
            <img src="./images/gallery8.png" alt="" />
            <img src="./images/gallery9.png" alt="" />
        </div>
        <div className="gallery-inner">
            <img src="./images/gallery10.png" alt="" />
            <img src="./images/gallery122.png" alt="" />
            <img src="./images/gallery11.png" alt="" />
        </div>
        <div className="gallery-inner">
            <img src="./images/gallery12.png" alt="" />
            <img src="./images/gallery13.png" alt="" />
            <img src="./images/gallery14.png" alt="" />
        </div>
    </Wrapper>
  )
}

export default GallerySection