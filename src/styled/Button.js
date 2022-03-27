import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HiOutlineChevronRight} from 'react-icons/hi'

const Wrapper = styled.button`
  margin-top:30px;
  border:none;
  background:none;
  color:${props => props.textcolor};
  display:flex;
  cursor:pointer;
  align-items:center;
  text-decoration:none;
  font-size:15px;
  font-family:${props => props.theme.fam.rsemibold};
  span{
    border:4px solid ${props => props.borderColor};
    height:30px;
    color:${props => props.iconcolor};
    width:30px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:5px;
    svg{
      height:15px;
      width:15px;
    }
  }
`



function Button({text, link, borderColor,textcolor, iconcolor, texticon}) {
  return (
    <>
      <Link to={link} transition="scale" >
        <Wrapper borderColor={borderColor} textcolor={textcolor} iconcolor={iconcolor} texticon={texticon} className="button">
            
            <span>
              <HiOutlineChevronRight />
            </span>
              {text}
        </Wrapper>
    </Link>
    </>
  )
}

export default Button