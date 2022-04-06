import React from 'react'
import Video from '../styled/Video'
import styled from 'styled-components';

const Wrapper = styled.section`
    padding:5%;
    display:flex;
    flex-wrap:wrap;
    jusifty-content:center;
`

function VideoSection() {
  return (
    <Wrapper>
        <Video videoId="t9ezE-XDgZ4" bgImagehover='vid1 (2).webp' bgImage="vid1 (1).webp" />
        <Video videoId="p19KIWt8uIs" bgImagehover='vid2 (2).webp' bgImage="vid2 (1).webp" />
        <Video videoId="1SKM_-OCBJA&t=21s" bgImagehover="vid3.webp" bgImage="vid3.webp" />
        <Video videoId="uewa435Y_vQ" bgImagehover='vid4 (2).webp' bgImage="vid4 (1).webp"/>
        
        <Video videoId="GHETa31XFa8" bgImagehover='vid5.webp' bgImage="vid5.webp" />
 
        <Video videoId="P1nvOoIq9Xs&t=29s" bgImagehover='vid6 (1).webp' bgImage="vid6 (2).webp" />
      <Video videoId="PSsMvNn8_eY&t=1s" bgImagehover='vid7 (2).webp' bgImage="vid7 (1).webp" />
        <Video videoId="ZADlVoUBIoc" bgImagehover='vid8 (2).webp' bgImage="vid8 (1).webp"/>
       {/*   <Video videoId="ZADlVoUBIoc" bgImage="gallery3.png" /> */}
        {/* <Video videoId="pwHNannxolo" bgImage="gallery3.png" /> */}
        {/* <Video videoId="L61p2uyiMSo" /> */}
    </Wrapper>
  )
}

export default VideoSection