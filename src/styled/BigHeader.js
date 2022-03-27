import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h3`
  font-size:69px;
  color:rgba(0, 0, 0, 0.05);
  font-family:${props => props.theme.fam.rbold};
  @media(min-width:768px){
          font-size:75px;
        }
  @media(min-width:992px){
          font-size:100px;
        }
  @media(min-width:1200px){
          font-size:120px;
        }
`

function BigHeader({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default BigHeader