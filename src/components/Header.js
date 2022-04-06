import React, { useState } from "react";
import styled from "styled-components";
// import {  Link, scale, Screen } from "react-tiger-transition";
import {Link, NavLink} from 'react-router-dom'

const Wrapper = styled.section`
  text-align: center;
  z-index: 99;
  position: absolute;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media(min-width:768px){
    width:90%;
    left:50%;
    transform:translateX(-50%);
  }
  img{width:150px;
      margin:10px;
  }
  

 
  .hamburger {
    padding: 20px 47px 20px 5px;
    position:relative;
    right:2%;
    span {
      width: 40px ;
      height:5px;
      background:${props => props.theme.color.orange};
      position:absolute;
      transition:all 0.7s ease;
      &:before{
        width:100%;
        height:100%;
        background:${props => props.theme.color.orange};
        content:"";
        position:absolute;
        top:-12px;
        left:0;
        transition:all 0.7s ease;
      }
      &:after{
        width:100%;
        height:100%;
        background:${props => props.theme.color.orange};
        content:"";
        position:absolute;
        top:12px;
        left:0;
        transition:all 0.7s ease;
      }
    }
  }
  .change{
    span{
      background:transparent;
      &:before{
        top:0;
        transform:rotate(135deg);
      }
      &:after{
        top:0;
        transform:rotate(-135deg);
      }
    }
  }
  
`;

// scale({
//   name: "scale",
//   scale: 1.2,
//   exit: {
//     delay: 100,
//   },
// });

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="auto">
      <Wrapper>
        <Link to="/" transition="scale">
          <img src="./images/logotop.png" alt="Tigzozo logo" />
        </Link>
        <div
          className={open ? "hamburger change" : "hamburger"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </div>
        
      </Wrapper>
      <div  className={open ? "menu open" : "menu"}>
          <NavLink to="/" exact activeClassName="active"   onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active"   onClick={() => setOpen(false)}>
            About us
          </NavLink>
          {/* <NavLink to="/portfolio" activeClassName="active"   onClick={() => setOpen(false)}>
            Portfolio
          </NavLink> */}
          <NavLink to="/photography" activeClassName="active"   onClick={() => setOpen(false)}>
            Photography
          </NavLink>
          <NavLink to="/videography" activeClassName="active"   onClick={() => setOpen(false)}>
            Videography
          </NavLink>
          {/* <NavLink to="/uncommon" activeClassName="active"   onClick={() => setOpen(false)}>
            Contact us
          </NavLink> */}
          
        </div>
    </div>
  );
}

export default Header;
