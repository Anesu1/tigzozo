import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-family: ${props => props.theme.fam.regular};
    font-size: 15px;
    line-height: 1.3;
    @media(min-width:768px){
      font-size:16px;
    }
    br{
      display:none;
      @media(min-width:1200px){
        display:block;
      }
    }
`

function Paragraph({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Paragraph