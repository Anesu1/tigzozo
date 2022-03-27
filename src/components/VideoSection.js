import React from 'react'
import Video from '../styled/Video'
import styled from 'styled-components';

const Wrapper = styled.section`
    padding:5%;
`

function VideoSection() {
  return (
    <Wrapper>
        <Video videoId="L61p2uyiMSo" bgImage="" />
        <Video videoId="Gofd9MAY3sM" />
        <Video videoId="pwHNannxolo" />
        {/* <Video videoId="L61p2uyiMSo" /> */}
    </Wrapper>
  )
}

export default VideoSection