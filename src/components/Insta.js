import React from "react";
import InstagramEmbed from "react-instagram-embed";
import styled from 'styled-components';

const Wrapper = styled.section`
    padding:5% 0;
`

function Insta() {
  return (
    <Wrapper>
      <InstagramEmbed
        url="https://www.instagram.com/p/CL4P_Z2pDYl/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}} 
        onFailure={() => {}}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CJ1rTM6ATGC/"
        maxWidth={320}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </Wrapper>
  );
}

export default Insta;
