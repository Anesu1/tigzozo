import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
font-family: ${props => props.theme.fam.rbold};
font-size: 35px;
line-height: 76px;
@media(min-width:1200px){
  font-size:40px;
}
    span{
        color:${props => props.theme.color.orange};
    }
`

function Heading({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Heading