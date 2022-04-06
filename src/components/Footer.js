/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
// import { scale, Screen, Link } from "react-tiger-transition";
import Paragraph from '../styled/Paragraph';
import {Link} from 'react-router-dom'


const Wrapper = styled.footer`
    background:#101010;
    color:#ffffff;
    padding:5%;
    padding-bottom:12%;
    @media(min-width:768px){
        display:flex;
        justify-content:space-between;
        padding-bottom:5%;
        .footer-inner{
            width:50%;
        }
        .inner{
            width:40%;
        }
    }
    @media(min-width:992px){
        padding:5% 10%;
    }
    img{
        width:100%;
        max-width:200px;
        margin-bottom:20px;
    }
    h3{
        color:${props => props.theme.color.orange};
        margin-bottom:20px;
    }
    .inner{
        display:flex;
        margin-top:30px;
        .links{
            width:50%;
            a{
                display:block;
                color:#ffffff;
                padding:13px 20px 13px 0;
            }
        }
    }
    .react-tiger-transition--screen {
    overflow: hidden;
  }
`


function Footer() {
  return (
    <Wrapper>
        <div className="footer-inner">
            <img src="./images/logotop.png" alt="Tigzozo Logo" />
            <Paragraph>Creating digital innovation and inspiration for our clients.</Paragraph>
            </div>
        <div className="inner">
            <div className="links">
                <h3>Links</h3>
                <>
                    <Link to="/" transition="scale">Home</Link>
                    <Link to="/about" transition="scale">About Us</Link>
                    <Link to="/photography" transition="scale">Photography</Link>
                    <Link to="/videography" transition="scale">Videography</Link>
                </>
                </div>
            <div className="links">
                <h3>Social Links</h3>
                    <a href="https://instagram.com/tigzozo_media?utm_medium=copy_link">Instagram</a>
                    <a href="https://www.facebook.com/tigzozomedia">Facebook</a>
                    <a href="https://www.linkedin.com/in/tigzozo-media-b0a411234">LinkedIn</a>
                </div>
            </div>
    </Wrapper>
  )
}

export default Footer